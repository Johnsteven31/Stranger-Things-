import React, {useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
    const [posts, setPosts] = useState ([]); 
    const [profileData, setProfileData] = useState([])
    
    useEffect (()=> {
        async function handleProfileInfo () {
            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/me", {
                    headers:{
                        "Content-Type": "application/json", 
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
                const data = await response.json();
                
                setProfileData(data.data);
            }catch(error) {
                console.log(error);
            }
        }
        handleProfileInfo ()
    },[])
    return (
        <div id ="Homepage">Post and Sell
            <nav className="Nav">
                <Link to = "/">Homepage</Link> 
                <Link to = "Register">Register</Link>
                <Link to = "Login">Login</Link>
                <Link to = "AllPosts">All Posts</Link>
                <Link to = "Profile">Profile</Link>
            </nav>
           <Outlet context={[posts,setPosts, profileData, setProfileData]}/>
        </div>
    )
};

export default Homepage 
   