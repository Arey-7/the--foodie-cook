import styles from "./nav.module.css";
import Search from "./Search";
import { FoodInfo } from "../types";

export default function Nav({
    foodData,
    setFoodData,
  }: {
    foodData: FoodInfo[];
    setFoodData: React.Dispatch<React.SetStateAction<FoodInfo[]>>;
  }) {
  return (
    <div className={styles.nav}>
      <a href="./" className={styles.home}>
        👨🏽‍🍳 the foodie cook
      </a>
      <div><Search foodData={foodData} setFoodData={setFoodData}/></div>
    </div>
  );
}
