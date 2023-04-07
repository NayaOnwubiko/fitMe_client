import "./MealItem.scss";
import { Link } from "react-router-dom";


function MealItem({ mealItem }) {

    return (
        <div>
            <Link to={`/schedule/meals/${mealItem.id}`}>
                <p>
                    {mealItem.name}
                </p>
             </Link>
                <p>
                    {mealItem.type}
                </p>
                <p>
                    {mealItem.calories}
                </p>
                <p>
                    {mealItem.ingredients}
                </p>
           
        </div>
    )
}

export default MealItem;