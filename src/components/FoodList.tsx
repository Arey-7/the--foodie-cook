import { FoodInfo } from "../types";
import FoodCard from "./FoodCard";

export default function FoodList({foodData}: {foodData: FoodInfo[]}) {
    console.log(foodData);
    return(
        <div>
            {foodData.map((food) => (
                <FoodCard key={food.id} food={food}/>
            ))}
        </div>
    )
}