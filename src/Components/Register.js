import React, {useState, useEffect} from "react";

const Register = () => {
    const [username, setUsername] = useState () 
    const [password, setPassword] = useState ()

    async function registerHandler (event) {
        event.preventDefault();
        try {
            const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
            {
                method: "POST", 
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify ({
                    user:{
                        username:username, 
                        password:password
                    }
                })
            })
            const data = await response.json ()
                console.log (data)
                localStorage.setItem('token', data.token)
                console.log(data.token)
        }catch (error){
            console.log(error)
        }
    }
        const changeUsername = (event) => {
            setUsername (event.target.value)
        }
        const changePassword = (event) => {
            setPassword (event.target.value)
        }
        return (
            <div>
                <h3>Register</h3>
                <form onSubmit = {registerHandler}>
                    <label>Username</label>
                    <input type ="text" value={username} onChange = {changeUsername}></input>
                    <label>Password</label>
                    <input type = "text" value ={password} onChange= {changePassword}></input>
                    <div></div>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        ) 
}

export default Register