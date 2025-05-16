const supabaseUrl = "https://djnxumgjhrycxjxqtdju.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbnh1bWdqaHJ5Y3hqeHF0ZGp1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMwNDMyMCwiZXhwIjoyMDYyODgwMzIwfQ.Vk52rtg-8HxYI1Me2FS2W2XI274pLrAoymxBoX9l3bc";

export default async function handler(req, res) {
  const response = await fetch(`${supabaseUrl}/rest/v1/apartments`, {
    headers: {
      apiKey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  });

  if (!response.ok) {
    console.error("Supabase API error:", response.statusText);
    return res.status(response.status).json({ error: response.statusText });
  }

  const data = await response.json();
  res.status(200).json(data);
}
