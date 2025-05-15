console.log("Server is running and listening for requests...");
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

console.log("Server is running and listening for requests... 2");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASS:", process.env.DB_PASS);


// PostgreSQL Database Connection
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432,
  ssl: { rejectUnauthorized: false }, // Required for Supabase!
});

export default async function handler(req, res) {
  console.log("API Request received for /apartments"); // Debugging log
  console.log("DB_HOST:", process.env.DB_HOST); // Check if env variables are loaded

  if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM apartments");
      res.json(result.rows);
    } catch (err) {
      console.error("Database query error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
