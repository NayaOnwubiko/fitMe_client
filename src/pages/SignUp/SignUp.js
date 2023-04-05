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
        axios.post("http://localhost:8080/signup", {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then(response => {
            localStorage.authToken = response.data.token;
            navigate("/user-profile");
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
                    Password: <input type="text" name="password"></input>
                </label><br />
                <p>Fitness Level:</p>
                <input type="radio" name="category" id="beginner"></input>
                    <label htmlFor="beginner">Beginner</label>
                <input type="radio" name="category" id="intermediate"></input>
                    <label htmlFor="intermediate">Intermediate</label>
                <input type="radio" name="category" id="expert"></input>
                    <label htmlFor="expert">Expert</label>
                <p>Avatar</p><button>Upload</button><br />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;