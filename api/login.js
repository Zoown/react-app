import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const supabaseUrl = "https://djnxumgjhrycxjxqtdju.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbnh1bWdqaHJ5Y3hqeHF0ZGp1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMwNDMyMCwiZXhwIjoyMDYyODgwMzIwfQ.Vk52rtg-8HxYI1Me2FS2W2XI274pLrAoymxBoX9l3bc";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  const response = await fetch(`${supabaseUrl}/rest/v1/users?username=eq.${username}`, {
    headers: {
      apiKey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: response.statusText });
  }

  const users = await response.json();
  if (users.length === 0) {
    return res.status(401).json({ error: "User not found" });
  }

  const user = users[0];

  if (!bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, "your-secret-key", { expiresIn: "1m" });
  res.json({ token });
}
