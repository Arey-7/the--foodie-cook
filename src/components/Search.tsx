import { useEffect, useState } from "react";
import { FoodInfo } from "../types";
import styles from "./search.module.css";

const URL = "http://localhost:777";

export default function Search({
  foodData,
  setFoodData,
}: {
  foodData: FoodInfo[];
  setFoodData: React.Dispatch<React.SetStateAction<FoodInfo[]>>;
}) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${URL}?query=${query}`);
        const data = await response.json();
        // Handle the fetched data as needed
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (query) {
      fetchFood();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        id="search"
        name="search"
        placeholder="Search Foods..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
