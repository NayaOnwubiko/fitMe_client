import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import hero from "../../assets/logo/hero.png";


function Home() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

       axios.post("http://localhost:8080/users/login", {
        email: event.target.email.value,
        password: event.target.password.value
       })
       .then(response => {
            localStorage.authToken = response.data.token;
            navigate("/users/currentuser");
       })
       .catch(error => {
            alert("Unable to login, sorry");
       })
    }

    const authToken = localStorage.authToken;

    if (authToken) {
        navigate("/users/currentuser");
    }

    //Show the user the login form
    return (
            <section className="home">
                <div className="home__hero">
                    <img className="home__hero-image"
                        src={hero}
                        alt="hero"
                        />
                </div>
                <div className="home__form-container">
                <form className="home__form" onSubmit={handleLogin}>
                    <label className="home__form-label">Email
                        <input className="home__form-input" type="text" name="email"></input></label>
                    <label className="home__form-label">Password 
                        <input className="home__form-input" type="password" name="password"></input></label>
                    <Link to="/signup" className="home__form-link">Create an account</Link>
                    <button className="home__form-button">SIGN IN</button>
                </form>
                </div>
            </section>
    )

}

export default Home;