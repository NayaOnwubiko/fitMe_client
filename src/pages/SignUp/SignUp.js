import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import signup from "../../assets/icons/signup.svg";

function SignUp(){
    const navigate = useNavigate();

    if (localStorage.authToken) {
        navigate("/currentuser");
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        
        //post signup details once the form is set up
        axios.post("http://localhost:8080/users/signup", {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            difficulty: event.target.difficulty.value,
            vegetarian: event.target.vegetarian.value
        })
        .then(response => {
            localStorage.authToken = response.data.token;
            navigate("/users/currentuser");
        })
        .catch(error => {
            //Show an error message
            alert("Unable to Sign Up, please try again");
        })
    }

    //Show the signup form
    return (
            <section className="signup">
                <div className="signup__hero">
                    <img className="signup__hero-image"
                         src={signup}
                        alt="sign up" />
                    <h2>HOW DOES THIS WORK?</h2>
                        <h3>FILL IN THE FORM</h3>
                            <p>Based on your fitness level & meal preferences, we will select the optimal training & nutrition program for you.</p>
                </div>
            <form className="signup__form" onSubmit={handleSignUp}>
                <label className="signup__form-label">
                    Name <input className="signup__form-input" type="text" name="name"></input>
                </label><br />
                <label className="signup__form-label">
                    Email <input className="signup__form-input" type="text" name="email"></input>
                </label><br />
                <label className="signup__form-label">
                    Password <input className="signup__form-input" type="password" name="password"></input>
                </label><br />
                <p className="signup__form-radio">Fitness Level</p>
                <div className="signup__form-option">
                <input 
                        type="radio" 
                        name="difficulty" 
                        id="beginner"
                        value="beginner">
                </input>
                    <label htmlFor="beginner" className="signup__form-radio-label">Beginner</label>
                </div>
                <div className="signup__form-option">
                <input type="radio" 
                        name="difficulty" 
                        id="intermediate"
                        value="intermediate">         
                </input>
                    <label htmlFor="intermediate" className="signup__form-radio-label">Intermediate</label>
                </div>
                <div className="signup__form-option">
                <input type="radio" 
                       name="difficulty" 
                       id="expert"
                       value="expert"></input>
                    <label htmlFor="expert" className="signup__form-radio-label">Expert</label>
                </div>
                <p className="signup__form-radio">Food Preference</p>
                <div className="signup__form-option">
                <input type="radio" 
                        name="vegetarian" 
                        value="FALSE"
                        id="non_veg"
                        >
                </input>
                    <label htmlFor="non_veg" className="signup__form-radio-label">I Love Meat</label>
                </div>
                <div className="signup__form-option">
                <input type="radio" 
                        name="vegetarian" 
                        value="TRUE"
                        id="veg"
                        >
                </input>
                    <label htmlFor="veg" className="signup__form-radio-label">Vegetarian</label>
                </div>
                <button className="signup__form-button">SIGN UP</button>
            </form>
        </section>
    )
}

export default SignUp;