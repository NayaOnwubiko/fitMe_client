import "./ExerciseList.scss";
import { useEffect, useState } from "react";
import ExerciseItem from "../../components/ExerciseItem/ExerciseItem";
import axios from "axios";

function ExerciseList() {
const [exerciseList, setExerciseList] = useState(null);
    
    useEffect(() => {
        axios
            .get("http://localhost:8080/schedule/exercises")
            .then((response) => {
                setExerciseList(response.data);
            })
            .catch((error) => {
                console.error("Could not access API: " + error);
            });
    }, []);

    if (!exerciseList) {
        return <h3>Loading Meals....</h3>
    }

    return (
        <section className="schedule__container">
            {exerciseList.map((exerciseItem) => {
                return (
                    <li className="schedule__container-item" key={exerciseItem.id}>
                        <ExerciseItem exerciseItem={exerciseItem} />
                    </li>
                );
            })}
        </section>
    )
}

export default ExerciseList;