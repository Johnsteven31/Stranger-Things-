import React, { useState, useEffect} from "react"

const Login = () => {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    function handleUsernameChange (event) {
        console.log (event.target.value)
        setUsername(event.target.value)
    }
    function handlePasswordChange (event) {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    async function setRegisterInfo (event) {
        event.preventDefault (); 
        try {
            const response = await fetch ("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/login", {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify ({
                    user:{
                        username:username,
                        password:password
                    }
                })
            });
            const data = await response.json ();
            console.log ("This was our reqesusts returned promise;", data)

            localStorage.setItem ("token", data.data.token);
        }catch (error) {
            console.log (error)
        }
    }

        return (
            <div>
                <h3>Login</h3>
                <form onSubmit = {setRegisterInfo}>
                    <label>Username</label>
                    <input type = "text" value = {username} onChange = {handleUsernameChange}></input>
                    <label>Password</label>
                    <input type = "text" value = {password} onChange = {handlePasswordChange}></input>
                    <div></div>
                        <button type = "submit">Login Account</button>
                </form>
            </div>
        )
}

//ReactDOM.render (<Homepage/>, document.getElementById("app"))
export default Login