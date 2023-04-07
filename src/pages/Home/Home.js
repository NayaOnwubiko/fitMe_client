import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import hero from "../../assets/logo/hero.svg";

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
       axios.post("http://localhost:8080/users/login", {
        email: event.target.email.value,
        password: event.target.password.value
       })
       .then(response => {
            localStorage.authToken = response.data.token;
            navigate("/");
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
                        <li><Link to="/users/currentuser">Profile</Link></li>
                    </ul>
            </>
        );
    }

    //Show the user the login form
    return (
        <>
            <section className="home">
                <div className="home__hero">
                    <h1 className="home__hero-title">HEALTHY AND BEAUTIFUL BODY</h1>
                    <img className="home__hero-image" 
                        src={hero}
                        alt="hero" />
                </div>
                <form className="home__form" onSubmit={handleLogin}>
                    <label className="home__form-label">Email
                        <input className="home__form-input" type="text" name="email"></input></label>
                    <label className="home__form-label">Password 
                        <input className="home__form-input" type="password" name="password"></input></label>
                    <Link to="/signup" className="home__form-link">Create an account</Link>
                    <button className="home__form-button">SIGN IN</button>
                    
                </form>
            </section>
        </>
    )

}

export default Home;