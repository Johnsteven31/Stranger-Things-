import React, {useState, useEffect} from "react";

const AllPosts = () => {
    const [info, useInfo] = useState ();
    useEffect (()=> {
        async function postHandler(event) {
            try {
                const response = await fetch (
                    "https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/posts"
                    );
                const transData = await response.json (); 
                useInfo (transData.data.posts);
            } catch (error) {
                console.log(error); 
            }
        }
        postHandler();
    }, []);

    return (
        <div>
            {info && info.length
                ? info.map((event,index) => {
                    return <div key = {index}>
                                <div className="title">{event.title}</div>
                                <div className="description">{event.description}</div>
                                <div className="price">{event.price}</div>
                        </div>
                })
            :null}
        </div>
    )
}

export default AllPosts; 