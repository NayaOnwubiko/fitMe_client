import "./EditProfile.scss";

function EditProfile(){
    return (
        <>
            <h1>Edit Profile</h1>
            <form>
                <label>
                    Name: <input type="text" name="name"></input>
                </label>
                <label>
                    Email: <input type="text" name="email"></input>
                </label>
                <label>
                    Password: <input type="text" name="password"></input>
                </label>
                <label>
                    Fitness Level: <input type="radio" name="difficulty">Beginner</input>
                                   <input type="radio" name="difficulty">Intermediate</input>
                                   <input type="radio" name="difficulty">Expert</input>
                </label>
                <label>
                    Food Preference: <input type="radio" name="category">I love meat</input>
                                     <input type="radio" name="category">Vegetarian</input>
                </label>
                <label>
                    Avatar: <button>Upload</button>
                </label>
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default EditProfile;