import { FoodInfo } from "../types";
import styles from "./foodcard.module.css";

export default function FoodCard({ food }: { food: FoodInfo }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{food.title}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={food.image} alt={food.title} />
      </div>
      <button>View Recipe</button>
    </div>
  );
}
