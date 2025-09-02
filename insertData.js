const data = require('./business-rules.json')
const { MongoClient } = require("mongodb");

const url = "uri-here";
const dbName = "dbname";

async function run() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("connected");
        const db = client.db(dbName);
        const collection = db.collection("rules");

        const result = await collection.insertMany(data);
        console.log("Inserted documents:", result.insertedIds);
    } catch (err) {
        console.error("Error inserting document:", err);
    } finally {
        await client.close();
    }
}

run();

