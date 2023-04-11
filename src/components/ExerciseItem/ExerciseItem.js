import "./ExerciseItem.scss";
import { Link } from "react-router-dom";

function ExerciseItem({ exerciseItem }) {

    return (
        <>
            <div className="item__image">
                <img className="item__image-photo"
                    src={exerciseItem.image}
                    alt={exerciseItem.name}
                    />
            </div>
            <div className="preview">
                <Link className="preview__link" to={`/schedule/exercises/${exerciseItem.id}`}>
                    <h4 className="preview__title">{exerciseItem.name}</h4>
                </Link>
                    <p className="preview__content">{exerciseItem.type}</p>
                    <p className="preview__description">Muscle: {exerciseItem.muscle}</p>  
            </div>
        </>   

    )
}

export default ExerciseItem;