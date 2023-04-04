import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        /*
            1. form values: event.target.email.value, event.target.password.value
            2. axios request: POST /login with email, password to get token
            3. Handle axios response: token -> set on localStorage.authToken
            4. Show user profile
        */
       axios.post("http://localhost:8080/login", {
        email: event.target.email.value,
        password: event.target.password.value
       })
       .then(response => {
            localStorage.authToken = response.data.token;
            navigate("/user-profile");
       })
       .catch(error => {
            alert("Unable to login, sorry");
       })
    }

    const authToken = localStorage.authToken;

    if (authToken) {
        //navigate to the user profile as an option
        return (
            <>
                <h1>Home</h1>
                    <ul>
                        <li><Link to="/schedule">Schedule</Link></li>
                        <li><Link to="/user-profile">Profile</Link></li>
                    </ul>
            </>
        );
    }

    //Show the user the login form
    return (
        <>
            <h1>Please login</h1>
            <form onSubmit={handleLogin}>
                <label>Email: <input type="text" name="email"></input></label><br />
                <label>Password: <input type="password" name="password"></input></label><br />
                <button>Login</button>
            </form>
        </>
    )

}

export default Home;