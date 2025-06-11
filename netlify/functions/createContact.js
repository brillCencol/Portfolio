import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    await client.connect();
    const db = client.db("Portfolio");
    const result = await db.collection("contacts").insertOne(data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Contact saved!", id: result.insertedId }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    await client.close();
  }
};
