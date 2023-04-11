import "./ExerciseDetails.scss";
import Header from "../../components/Header/Header";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import instructionIcon from "../../assets/icons/bicycle.svg";
import backIcon from "../../assets/icons/back.svg";

function ExerciseDetails(){
    const { exerciseId } = useParams();
    const [renderedExercise, setRenderedExercise] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/schedule/exercises/${exerciseId}`)
            .then((resp) => {
                if (resp.status === 200) {
                    const exerciseData = resp.data;
                    setRenderedExercise(exerciseData);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [exerciseId]);

    if (renderedExercise === null) {
        return <h2>Loading exercise details...</h2>;
    };

    return (
        <>
        <Header />
        <section className="detail">
            <NavLink className="detail__link" to="/users/exercises">
                <img className="detail__link-icon"
                     src={backIcon}
                     alt="back button"
                />
            </NavLink>
            <h1>{renderedExercise.name}</h1>
                <img className="detail__image"
                    src={renderedExercise.image}
                    alt={renderedExercise.name}
                    />
            <div className="detail__caption">
                <p>Muscle: {renderedExercise.muscle}</p>
                <p>{renderedExercise.type}</p>
            </div>
            <div className="detail__description">        
                <h3>Equipment: </h3> <br/> 
                    <p>{renderedExercise.equipment}</p>
            </div>
            <div className="detail__description">
                    <img className="detail__description-icon"
                        src={instructionIcon}
                        alt="preparation icon"
                        />
                <h3>Instructions: </h3> <br/> 
                    <p>{renderedExercise.instructions}</p>
            </div>
        </section>
        </>
    );
}

export default ExerciseDetails;