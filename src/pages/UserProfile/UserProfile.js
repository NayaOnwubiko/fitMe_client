import "./UserProfile.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../../assets/icons/avatar.svg";
import exerciseIcon from "../../assets/icons/treadmill.svg";
import foodIcon from "../../assets/icons/bowl.svg";
import powerIcon from "../../assets/icons/power.svg";

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
                    <img className="profile__header-image-icon"
                        src={avatar}
                         alt="avatar"
                    />
                </div>
                <div className="profile__header-name">

                    <h2 className="profile__header_name-title">{user.name}</h2>
                    <p className="profile__header-program">Program: {user.difficulty}</p>
                </div>
                <div className="profile__header-edit">
                     <img onClick={handleLogout}
                        className="profile__header-icon"
                        src={powerIcon}
                        alt="power icon"
                        />
                    <p className="profile__header-text">Log Out</p>
                </div>
            </div>
            <div className="schedule">
                <div className="exercise">
                    <h3 className="exercise__title">Exercise Routines</h3>
                    <Link className="exercise__link" to="/users/exercises"> 
                    <img className="exercise__icon"
                        src={exerciseIcon}
                        alt="exercise icon"
                    />
                    </Link> 
                </div>
                <div className="meal">
                    <h3 className="meal__title">Meal Plan</h3>
                    <Link className="meal__link" to="/users/meals">
                    <img className="meal__icon"
                        src={foodIcon}
                        alt="food icon"
                    />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default UserProfile;