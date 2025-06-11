import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function handler(event, context) {
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);
    try {
      await client.connect();
      const collection = client.db().collection("contacts");
      const result = await collection.insertOne(data);

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
