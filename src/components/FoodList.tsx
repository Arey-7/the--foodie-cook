import { FoodInfo } from "../types";
import FoodCard from "./FoodCard";
import styles from "./foodlist.module.css"

export default function FoodList({foodData}: {foodData: FoodInfo[]}) {
    console.log(foodData);
    return(
        <div className={styles.container}>
            {foodData.map((food) => (
                <FoodCard key={food.id} food={food}/>
            ))}
        </div>
    )
}