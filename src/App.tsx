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
      <Nav foodData={foodData} setFoodData={setFoodData} />
      <div className="content">
        <FoodList foodData={foodData} />
      </div>
    </main>
  );
}

export default App;
