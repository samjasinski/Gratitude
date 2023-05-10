import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

console.log()

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r2xx6.mongodb.net/?retryWrites=true&w=majority` || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;