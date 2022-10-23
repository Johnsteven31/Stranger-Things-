import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import Homepage from "./Components/Homepage" 
import Errorpage from "./Components/Errorpage"
import About from "./Components/About" 
import Register from "./Components/Register" 

const router = createBrowserRouter ([
    {
        path: "/", 
        element:<Homepage />,
        errorElement: <Errorpage/>, 
        children: [
            {
                path: "About", 
                element: <About/>
            },
            {
                path: "Register",
                element: <Register/>,
            }
        ]
    }
])


ReactDOM.render(<RouterProvider router = {router}/>, document.getElementById("app"))
   