import "./EditProfile.scss";

function EditProfile(){
    return (
        <>
            <h1>Edit Profile</h1>
            <form>
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
                <button>Save</button>
            </form>
        </>
    )
}

export default EditProfile;