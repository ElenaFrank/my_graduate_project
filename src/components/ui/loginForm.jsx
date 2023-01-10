import React, {useState, useEffect} from "react"
import TextField from "../common/form/textField"
import CheckBoxField from "../common/form/checkBoxField"
import * as yup from 'yup'

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false })
    const [errors, setErrors] = useState({})

    const validateShema = yup.object().shape({
        password: yup.string().required("password обязателен для заполнения"),
        email: yup.string().required("Email обязателен для заполнения").email("Email введен некорректно")
    })

    //UseEffects
    useEffect(()=>{
        validate()
    },[data])

    //Функции
    const validate = () => {
        validateShema.isValid(data)
        .then((res)=> {
            console.log("then", res)
            setErrors({})
        })
        .catch(err=> {
            setErrors({[err.path]:err.message})
            console.log("catch", err)
        })
        return Object.keys(errors).length===0 
    }

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
            error = {errors.email}
        />
        <TextField 
            name="password"
            label="Password"
            type="password"
            value={data.password}
            onChange = {hadleChange}
            error = {errors.password}
        />
        <CheckBoxField 
        name = "stayOn" 
        value={data.stayOn}
        onChange = {hadleChange}
        >
            Stay on system
        </CheckBoxField>
       
        </form>

        </>
    
    )
}
 
export default LoginForm;