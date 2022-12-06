import React from "react"
import { Link, useParams } from "react-router-dom"
import LoginForm from "../components/ui/loginForm"
import RegisterForm from "../components/ui/registerForm"

const Main = () => {
    const param = useParams()
    const {type} = param
    return (
    <>
        <h1 style={{color: "white"}}>Main</h1>
        {type === "reg" && <RegisterForm /> }
        {!type && <LoginForm />}
        <Link to={!type ? "/reg" : ""}>Перейти в другую форму</Link>
    </>
    )
}
 
export default Main;