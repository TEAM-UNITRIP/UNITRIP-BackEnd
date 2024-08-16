import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient("https://hxwydpaqcdilnqahvmjf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4d3lkcGFxY2RpbG5xYWh2bWpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM2MTM4MjEsImV4cCI6MjAzOTE4OTgyMX0.gHDIyM_ix4FDx3aTyRBlVEqLjaQ097iLbGRAbH3OWr4");

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const { data } = await supabase.from("USER").select();
    setUsers(data);
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.region}>{user.region}</li>
      ))}
    </ul>
  );
}

export default App;