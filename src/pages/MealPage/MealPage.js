import "./MealPage.scss";
import MealList from "../../components/MealList/MealList";
import Header from "../../components/Header/Header";
import fruitIcon from "../../assets/icons/fruit_sm.svg";

function MealPage(){
    return (
        <>
        <Header />
        <div className="schedule__page-header">
            <img className="schedule__page-header-icon"
                src={fruitIcon}
                alt="fruit icon"
            />
            <h2 className="schedule__page-header-title">Meal Plan</h2>
        </div>
        <MealList />
        </>
    )
}

export default MealPage;