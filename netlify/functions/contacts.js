import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export async function handler(event, context) {
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const collection = client.db("Portfolio").collection("contacts");
      const result = await collection.insertOne(data);
      await client.close();

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Contact saved", id: result.insertedId }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: err.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }
}
