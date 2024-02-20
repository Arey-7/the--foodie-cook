import { useEffect, useState } from "react";

const URL = "http://localhost:777/food";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${URL}?query=${query}`);
        const data = await response.json();
        console.log(data);
        // Handle the fetched data as needed
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (query) {
      fetchFood();
    }
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search Foods..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
