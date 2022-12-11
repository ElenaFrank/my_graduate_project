import React, {useState} from "react"
import TextField from "../common/form/textField";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false })

    const hadleChange = (target) => {
        setData(prevstate => ({
            ...prevstate, [target.name]: target.value
        }) )
    }
    return (
        <>

        <h2>This is Login Form</h2>
        <form>
        <TextField 
            name="email"
            label="Email"
            type="email"
            value={data.email}
            onChange = {hadleChange}
        />
        <TextField 
            name="password"
            label="Password"
            type="password"
            value={data.password}
            onChange = {hadleChange}
        />
       
       {/* <div>
       <label>Password</label>
        <input type="password" name="password" id="password"></input>
       </div>  */}
        </form>


       {/* <button className="mt-4" onClick={toggleHiddenForm}>{!hiddenValue ? "Register" : "Login in"}</button> */}

        </>
    
    )
}
 
export default LoginForm;