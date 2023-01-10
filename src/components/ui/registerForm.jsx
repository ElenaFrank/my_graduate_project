import React, {useState} from "react"
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: "", licence: false })

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
            name="emailRegister"
            label="Email"
            type="email"
            value={data.email}
            onChange = {hadleChange}
        />
        <TextField 
            name="passwordRegister"
            label="Password"
            type="password"
            value={data.password}
            onChange = {hadleChange}
        />
        <CheckBoxField
        name={"licence"}
        value = {data.licence}
        onChange = {hadleChange}
        >
            Принять лицензионное соглашение    
        </CheckBoxField>
        </form>

        </>
    )
}
 
export default RegisterForm