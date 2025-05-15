// Debugging Log to Ensure Execution
console.log("Server is running and listening for requests...");

import pg from "pg"; // Use ES Module Import
import dotenv from "dotenv";

// Load Environment Variables (Only Needed Locally)
dotenv.config();

// PostgreSQL Database Connection
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
  ssl: { rejectUnauthorized: false } // Required for Supabase!
});

export default async function handler(req, res) {
  console.log("API Request received for /apartments");

  // Debugging: Log Environment Variables
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_HOST:", process.env.DB_HOST);
  console.log("DB_NAME:", process.env.DB_NAME);
  console.log("DB_PASS:", process.env.DB_PASS ? "Exists" : "Not Set");

  // Ensure Environment Variables Exist
  if (!process.env.DB_HOST) {
    console.error("DB_HOST is MISSING in Vercel!");
    return res.status(500).json({ error: "DB_HOST is undefined in Vercel!" });
  }

  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM apartments");
      res.status(200).json(result.rows);
    } catch (err) {
      console.error("Database Query Error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
