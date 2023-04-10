import "./UserProfile.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/icons/avatar.svg";
import exerciseIcon from "../../assets/icons/treadmill.svg";
import foodIcon from "../../assets/icons/fruit.svg";

function UserProfile() {
    const [user, setUser ] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = localStorage.authToken;
        if (!jwtToken) {
            navigate("/");
            return ;
        }
        console.log(jwtToken);
        //if JWT token exists
        axios
            .get("http://localhost:8080/users/currentuser", {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            })
            .then(response => {
                setUser(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                localStorage.removeItem("authToken");
                navigate("/")
            })
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/");
    }

    if (isLoading) {
        return (
            <>
                <h1>User Profile</h1>
                <p>Loading....</p>
            </>
        )
    }

    return (
    //Display the User Profile and Schedule
        <section className="profile">
            <div className="profile__header">
                <div className="profile__header-image">
                    <img src={avatar}
                         alt="avatar"
                    />
                </div>
                <div className="profile__header-name">
                    <h2 className="profile__header_name-title">{user.name}</h2>
                    <p className="profile__header-program">Program: {user.difficulty}</p>
                </div>
            </div>
            <div className="schedule">
                <div className="exercise">
                    <h3>Exercise Routines</h3>
                    <img
                        src={exerciseIcon}
                        alt="exercise icon"
                    />
                </div>
                <div>
                    <h3>Meal Plan</h3>
                    <Link to="/users/meals">
                    <img
                        src={foodIcon}
                        alt="food icon"
                    />
                    </Link>
                </div>
            </div>
            {/* <h1>User Profile</h1>
            <p>Welcome to the site: {user.name} </p>
            <Link to="/users/meals">Meal Schedule</Link>
            <button onClick={handleLogout}>Logout</button> */}
        </section>
    )
}
export default UserProfile;