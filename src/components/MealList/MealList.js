import "./MealList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "../../components/MealItem/MealItem";

function MealList() {
    const [mealList, setMealList] = useState(null);
    
    useEffect(() => {
        axios
            .get("http://localhost:8080/schedule/meals")
            .then((response) => {
                setMealList(response.data);
            })
            .catch((error) => {
                console.error("Could not access API: " + error);
            });
    }, []);

    if (!mealList) {
        return <h3>Loading Meals....</h3>
    }

    return (
        <section>
            {mealList.map((mealItem) => {
                return (
                    <li key={mealItem.id}>
                        <MealItem mealItem={mealItem} />
                    </li>
                );
            })}
        </section>
    )
}

export default MealList;