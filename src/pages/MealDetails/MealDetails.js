import "./MealDetails.scss";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MealDetails(){
    const { mealId } = useParams();
    const [renderedMeal, setRenderedMeal] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/schedule/meals/${mealId}`)
            .then((resp) => {
                if (resp.status === 200) {
                    const mealData = resp.data;
                    setRenderedMeal(mealData);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [mealId]);

    if (renderedMeal === null) {
        return <h2>Loading meal details...</h2>;
    };

    return (
        <section>
            <NavLink to="/schedule">
                Back to schedule
            </NavLink>
            <h1>{renderedMeal.name}</h1>
                <p>Calories: {renderedMeal.calories}</p>
                <p>Ingredients: {renderedMeal.ingredients}</p>
                <p>Preparation: {renderedMeal.preparation}</p>
        </section>
    );
}

export default MealDetails;