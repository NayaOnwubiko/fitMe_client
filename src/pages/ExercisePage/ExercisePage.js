import "./ExercisePage.scss";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import Header from "../../components/Header/Header";
import exerciseIcon from "../../assets/icons/treadmill.svg";

function ExercisePage(){
    return (
        <>
        <Header />
        <div className="schedule__page-header">
            <img className="schedule__page-header-icon"
                src={exerciseIcon}
                alt="fruit icon"
            />
            <h2 className="schedule__page-header-title">Exercise Routines</h2>
        </div>
        <ExerciseList />
        </>
    )
}

export default ExercisePage;