const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
const DB = require("./database.js");
const { peerProxy } = require("./peerProxy.js");

const OWNER_EMAIL = "ethan@gmail.com";

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

function getUserRole(user) {
  return user.email === OWNER_EMAIL ? "owner" : "visitor";
}

app.post("/api/auth", async (req, res) => {
  try {
    const existingUser = await getUser("email", req.body.email);

    if (existingUser) {
      return res.status(409).send({ msg: "Existing user" });
    }

    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);

    res.send({
      email: user.email,
      role: getUserRole(user),
    });
  } catch (err) {
    console.error("POST /api/auth error:", err);
    res.status(500).send({ msg: "Server error" });
  }
});

app.put("/api/auth", async (req, res) => {
  try {
    const user = await getUser("email", req.body.email);

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);

      return res.send({
        email: user.email,
        role: getUserRole(user),
      });
    }

    res.status(401).send({ msg: "Unauthorized" });
  } catch (err) {
    console.error("PUT /api/auth error:", err);
    res.status(500).send({ msg: "Server error" });
  }
});

app.delete("/api/auth", async (req, res) => {
  try {
    const token = req.cookies["token"];
    const user = await getUser("token", token);

    if (user) {
      await DB.updateUserRemoveAuth(user);
      clearAuthCookie(res);
    }

    res.send({});
  } catch (err) {
    console.error("DELETE /api/auth error:", err);
    res.status(500).send({ msg: "Server error" });
  }
});

app.get("/api/user/me", async (req, res) => {
  try {
    const token = req.cookies["token"];
    const user = await getUser("token", token);

    if (user) {
      return res.send({
        email: user.email,
        role: getUserRole(user),
      });
    }

    res.status(401).send({ msg: "Unauthorized" });
  } catch (err) {
    console.error("GET /api/user/me error:", err);
    res.status(500).send({ msg: "Server error" });
  }
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email,
    password: passwordHash,
    token: uuid.v4(),
  };

  await DB.addUser(user);
  return user;
}

async function getUser(field, value) {
  if (field === "email") {
    return DB.getUser(value);
  }

  if (field === "token") {
    return DB.getUserByToken(value);
  }

  return null;
}

function setAuthCookie(res, token) {
  res.cookie("token", token, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
  });
}

function clearAuthCookie(res) {
  res.clearCookie("token");
}

const port = process.argv.length > 2 ? process.argv[2] : 4000;
const httpService = app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
