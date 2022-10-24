import {useState, useEffect} from "react"
import { Outlet, useOutletContext, Link } from "react-router-dom"
//import {EditPost} from './index';

const Profile = () => {
    const [,,profileData, setProfileData] = useOutletContext (); 
    console.log ("this is profile data", profileData)

    return (
        <div>
            <h4>Profile Page</h4>
            {
                profileData.posts ? profileData.posts.map ((indivPost, idx)=> {
                    return <div key = {idx}>
                        <p>{indivPost.title}</p>
                        <Link to={`/profile/${indivPost._id}`}>See Detailed View</Link>
                    </div>
                }):null
            }
        </div>
    )
}

export default Profile;