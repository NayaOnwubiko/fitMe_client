import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp(){
    const navigate = useNavigate();

    if (localStorage.authToken) {
        navigate("/user-profile");
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
            navigate("/");
        })
        .catch(error => {
            //Show an error message
            alert("Unable to Sign Up, please try again");
        })
    }

    //Show the signup form
    return (
        <>
            <h1>Sign Up Below</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Name: <input type="text" name="name"></input>
                </label><br />
                <label>
                    Email: <input type="text" name="email"></input>
                </label><br />
                <label>
                    Password: <input type="password" name="password"></input>
                </label><br />
                <p>Fitness Level:</p>
                <input type="radio" 
                        name="difficulty" 
                        id="beginner"
                        value="beginner">
                </input>
                    <label htmlFor="beginner">Beginner</label>
                <input type="radio" 
                        name="difficulty" 
                        id="intermediate"
                        value="intermediate">
                        
                </input>
                    <label htmlFor="intermediate">Intermediate</label>
                <input type="radio" 
                       name="difficulty" 
                       id="expert"
                       value="expert"></input>
                    <label htmlFor="expert">Expert</label>
                <p>Food Preference: </p>
                <input type="radio" 
                        name="vegetarian" 
                        value="FALSE"
                        id="non_veg"
                        >
                </input>
                    <label htmlFor="non_veg">I Love Meat</label>
                <input type="radio" 
                        name="vegetarian" 
                        value="TRUE"
                        id="veg"
                        >
                </input>
                    <label htmlFor="veg">Vegetarian</label>
                <p>Avatar</p><button>Upload</button><br />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;