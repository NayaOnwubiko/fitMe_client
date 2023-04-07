import "./Schedule.scss";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
import MealList from "../../components/MealList/MealList";


function Schedule(){
    // const [schedule, setSchedule] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const jwtToken = localStorage.authToken;
    //     if (!jwtToken) {
    //         navigate("/");
    //         return;
    //     }

    //     //If the JWT exists
    //     axios
    //         .get("http://localhost:8080/schedule", {
    //             headers: {
    //                 Authorization: `Bearer ${jwtToken}`
    //             }
    //         })
    //         .then(response => {
    //             setSchedule(response.data);
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             localStorage.removeItem("authToken");
    //             navigate("/")
    //         })
    // },[navigate]);
    
    // if (isLoading) {
    //     return (
    //         <h2>Loading Schedule....</h2>
    //     )
    // }

    return (
        <MealList />
    )
}

export default Schedule;