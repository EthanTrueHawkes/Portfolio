const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const DB = require("./database.js");

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

app.post("/api/auth", async (req, res) => {
  if (await getUser("email", req.body.email)) {
    res.status(409).send({ msg: "Existing user" });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);

    res.send({ email: user.email });
  }
});

app.put("/api/auth", async (req, res) => {
  const user = await getUser("email", req.body.email);

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    user.token = uuid.v4();
    await DB.updateUser(user);
    setAuthCookie(res, user.token);

    res.send({ email: user.email });
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

app.delete("/api/auth", async (req, res) => {
  const token = req.cookies["token"];
  const user = await getUser("token", token);
  if (user) {
    await DB.updateUserRemoveAuth(user);
    clearAuthCookie(res);
  }
  res.send({});
});

app.get("/api/user/me", async (req, res) => {
  const token = req.cookies["token"];
  const user = await getUser("token", token);
  if (user) {
    res.send({ email: user.email });
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };

  await DB.addUser(user);

  return user;
}

async function getUser(field, value) {
  if (field === "email") {
    return DB.getUser(value);
  } else if (field === "token") {
    return DB.getUserByToken(value);
  }
  return null;
}

function setAuthCookie(res, authToken) {
  res.cookie("token", authToken, {
    secure: true,
    httpOnly: true,
    sameSite: "strict",
  });
}

function clearAuthCookie(res) {
  res.clearCookie("token");
}

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
