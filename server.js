const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("Halima").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
async function run() {
    try {
      const database = client.db("shopdb");
      const haiku = database.collection("Baker");
      // create a document to insert
      const query = { runtime: { $lt: 15 } };
      const result = await haiku.insertOne({
        _id:10000,
        name:"BakerLawzi",
        gmail:"bakricoder71@gmail.com",
        title:"bla bla bla",
        imdb:"dunno what is this",
      });
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
