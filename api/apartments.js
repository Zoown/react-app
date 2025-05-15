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
  console.log("API Request received for /apartments");

  if (!process.env.DB_HOST) {
    console.error("DB_HOST is MISSING in Vercel!");
    return res.status(500).json({ error: "DB_HOST is undefined in Vercel!" });
  }

  console.log("DB_HOST (from Vercel):", process.env.DB_HOST); // Debugging

  try {
    const pg = require("pg");
    const pool = new pg.Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      port: 5432,
      ssl: { rejectUnauthorized: false }
    });

    const result = await pool.query("SELECT NOW()");
    res.status(200).json({ message: "Database connection successful", time: result.rows[0] });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: error.message });
  }
}
