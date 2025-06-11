import { MongoClient } from "mongodb";

// ⛔ Don't reuse the same client across Lambda invocations
// ✅ Create a fresh client instance inside the handler
export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let client;

  try {
    const data = JSON.parse(event.body);

    // ✅ Use the URI from environment variables
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("Missing MONGODB_URI");

    client = new MongoClient(uri);
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
    if (client) await client.close();
  }
};
