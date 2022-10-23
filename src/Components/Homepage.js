import React, {useState, useEffect} from "react";
import { Link, Outlet } from "react-router-dom";

const Homepage = () => {
    return (
        <div>This is the Homepage
            <nav>
                <Link to = "/">Homepage</Link>
                <Link to = "About">About Me</Link>
                <Link to = "Register">Register</Link>
            </nav>
            <Outlet/>
        </div>
    )
};

export default Homepage 
   