import { useState, useEffect } from "react";
import { json, useNavigate} from "react-router-dom"; 

const EditPost = (props) => {
    console.log ("EditPost props", props)
    const [title, setTitle] = useState (props.indivPosts.title); 

    const navigate = useNavigate (); 

    async function handleEditPost (event) {
        event.preventDefault();
        try {
            const response = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/${props.indivPost._id}`,{
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json", 
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify ({
                    post: {
                        title
                    }
                })
            }) 
            const editedPosts = await fetch (`https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts/`);
            const translatedEditPosts = await editedPosts.json ();

            props.setProfileData ([...translatedEditPosts.data.posts])
            props.handleToggleEditForm (); 

            navigate("/profile")
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <p>Welcome to my editPost</p>
            <form onSubmit={handleEditPost} >
                <label>Edit Title</label>
                <input type ="text" value={title} onChange = {(event) => setTitle(event.target.value)}></input>

                <button type ="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditPost;