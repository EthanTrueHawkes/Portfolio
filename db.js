const { MongoClient } = require("mongodb");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db("rental");
const collection = db.collection("house");

async function main() {
  try {
    await db.command({ ping: 1 });
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Error with ${url} because ${ex.message}`);
    process.exit(1);
  }

  try {
    const house = {
      name: "Beachfront views",
      summary: "From your bedroom to the beach, no shoes required",
      property_type: "Condo",
      beds: 1,
    };

    const insertResult = await collection.insertOne(house);
    console.log(`House inserted with ID: ${insertResult.insertedId}`);
  } finally {
    client.close();
  }
}

main();
