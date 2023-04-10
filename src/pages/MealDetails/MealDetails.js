import "./MealDetails.scss";
import Header from "../../components/Header/Header";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ingredientsIcon from "../../assets/icons/ingredients.svg";
import preparationIcon from "../../assets/icons/preparation.svg";

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
        <>
        <Header />
        <section className="detail">
            <NavLink to="/users/meals">
                Back to Meal Schedule
            </NavLink>
            <h1>{renderedMeal.name}</h1>
                <img className="detail__image"
                    src={renderedMeal.image}
                    alt={renderedMeal.name}
                    />
            <div className="detail__caption">
                <p>Calories: {renderedMeal.calories}</p>
                <p>{renderedMeal.type}</p>
            </div>
            <div className="detail__description">
                <img className="detail__description-icon"
                    src={ingredientsIcon}   
                    alt="ingredients icon"
                    />         
                <h3>Ingredients: </h3> <br/> 
                    <p>{renderedMeal.ingredients}</p>
            </div>
            <div className="detail__description">
                    <img className="detail__description-icon"
                        src={preparationIcon}
                        alt="preparation icon"
                        />
                <h3>Preparation: </h3> <br/> 
                    <p>{renderedMeal.preparation}</p>
            </div>
        </section>
        </>
    );
}

export default MealDetails;