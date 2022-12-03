// import React, {useEffect} from "react"
import React from "react"
import { useParams } from "react-router-dom"
import LoginForm from "../components/ui/loginForm"
import RegisterForm from "../components/ui/registerForm"

const Main = () => {
    const param = useParams()
    const {type} = param
    return (
    <>
        <h1 style={{color: "white"}}>Main</h1>
        {type ? <RegisterForm /> : <LoginForm />}
    </>
    )
}
 
export default Main;