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
  const dns = await import("dns/promises");

  try {
    const addresses = await dns.lookup("db.djnxumgjhrycxjxqtdju.supabase.co");
    res.status(200).json({ message: "DNS resolution successful", addresses });
  } catch (error) {
    console.error("DNS resolution error:", error);
    res.status(500).json({ error: error.message });
  }
}
