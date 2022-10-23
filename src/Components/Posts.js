import React from "react"
import { Link } from "react-router-dom"

const Component = () => {
    const [userPosts, setUserPost] = useState ([]); 

    useEffect (() => {
        async function fetchPostData () {
            try {
                const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts");

                const postdata = await response.json (); 

                setUserPost (postdata.data.posts)
                console.log(postdata.data.posts)
            }   catch (error) {
                console.log (error); 
            }
        }
        fetchPostData ()
    }, [])

    return (
        <div>
            <h1>JJ LIST</h1>
            <div>
                {
                    userPosts.map ((user, idx) => {
                        return <div key = {idx}>
                            <p>Descripition: {user.description}</p>
                            <p></p>    
                        </div>
                    })
                }
            </div>
        </div>
        )
    };

    export default Component