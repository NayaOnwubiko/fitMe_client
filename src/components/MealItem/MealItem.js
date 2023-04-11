import "./MealItem.scss";
import { Link } from "react-router-dom";

function MealItem({ mealItem }) {

    return (
        <>
            <div className="item__image">
                <img className="item__image-photo"
                    src={mealItem.image}
                    alt={mealItem.name}
                    />
            </div>
            <div className="preview">
                <Link className="preview__link" to={`/schedule/meals/${mealItem.id}`}>
                    <h4 className="preview__title">{mealItem.name}</h4>
                </Link>
                    <p className="preview__content">{mealItem.type}</p>
                    <p className="preview__description">Calories: {mealItem.calories}</p>  
            </div>
        </>   

    )
}

export default MealItem;