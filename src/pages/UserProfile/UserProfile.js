import "./UserProfile.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

/*
    if token doesn't exist: send user to the homepage
    if token exists: use it to get data from the backend.
        -when getting data: if token is invalid, send them to the home page
        -if token works: set the response on state

    - using user-profile state: render user information
*/

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
                console.log(response.data);
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
    //Display the User Profile and Schedule Lineup here
        <>
            <h1>User Profile</h1>
            <p>Welcome to the site: {user.name} </p>
            <Link to="/schedule">Schedule</Link>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default UserProfile;