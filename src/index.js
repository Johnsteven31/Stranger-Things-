import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Homepage from "./Components/Homepage" 
import Errorpage from "./Components/Errorpage"
import Register from "./Components/Register" 
import Login from "./Components/Login"
import AllPosts from "./Components/AllPosts"
import Profile from "./Components/Profile"
import DetailedPostView from "./Components/DetailedPostView"
import HomePageContents from "./Components/HomepageContents"

const router = createBrowserRouter ([
    {
        path: "/", 
        element:<Homepage />,
        errorElement: <Errorpage/>, 
        children: [
            {  
                index:true,
                element:<HomePageContents/>
            },
            {
                path: "Register",
                element: <Register/>,
            },
            {
                path: "Login",
                element :<Login/>
            },
            {
                path:"AllPosts",
                element:<AllPosts/>
            },
            {
                path:"Profile",
                element: <Profile/>
            },
            {
                path:"/Profile/:id",
                element:<DetailedPostView/>
            }
        ]
    }
])


ReactDOM.render(<RouterProvider router = {router}/>, document.getElementById("app"))
   