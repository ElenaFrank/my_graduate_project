import React, {useState} from "react"
import LoginForm from "../components/ui/loginForm"
import RegisterForm from "../components/ui/registerForm"

const Main = () => {

    const [hiddenValue, setHiddenValue] = useState(false)
    const toggleHiddenForm = () => {
        setHiddenValue(prevstate => prevstate = !prevstate)
    }
    return (
    <>
    <h1 style={{color: "white"}}>Main</h1>
    <div className="container mt-5" style={{background:"darkgray", color: "#212529"}}>
    <div className="row">
    <div className=".col-md-6 .offset-md-3 shadow p-4">
        <div hidden={hiddenValue}><LoginForm /></div>
        <div hidden={!hiddenValue}><RegisterForm /></div>
        <button onClick={toggleHiddenForm}>{!hiddenValue ? "Register" : "Login in"}</button>
    </div>

</div>

</div>


        
    </>
    )
}
 
export default Main