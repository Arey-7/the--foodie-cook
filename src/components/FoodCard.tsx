import { FoodInfo } from "../types";
import styles from "./foodcard.module.css";

export default function FoodCard({ food }: { food: FoodInfo }) {
  return (
        <button className={styles.card} onClick={() => {console.log(food.id)}}>
          <img className={styles.image} src={food.image} alt={food.title} />
          <div className={styles.belt}>
            <figcaption>{food.title}</figcaption>
          </div>
          
          </button>
  )
}
