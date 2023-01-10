import React, {useState} from "react"
import TextField from "../common/form/textField"
import CheckBoxField from "../common/form/checkBoxField"

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
        <CheckBoxField id = "stayOn" value={data.stayOn}>Stay on system</CheckBoxField>
       
        </form>

        </>
    
    )
}
 
export default LoginForm;