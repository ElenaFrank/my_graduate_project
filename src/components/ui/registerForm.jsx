import React, {useState} from "react"
import TextField from "../common/form/textField"

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: ""})

    const hadleChange = (target) => {
        setData(prevstate => ({
            ...prevstate, [target.name]: target.value
        }) )
    }
    return (
        <>

        <h2>This is Register Form</h2>
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
       
        </form>

        </>
    
    )
}
 
export default RegisterForm;