import { useState } from "react";

import "./App.css";

import Search from "./components/Search";
import { FoodInfo } from "./types";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";

function App() {
  const [foodData, setFoodData] = useState<FoodInfo[]>([]);

  return (
    <main>
      <Nav />
      <div className="content">
        <h1>What would you like to eat today?</h1>
        <Search foodData={foodData} setFoodData={setFoodData} />
        <FoodList foodData={foodData} />
      </div>
    </main>
  );
}

export default App;
