import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <div className="navbar navbar-expand-lg bg-light">
                    <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link activ text-dark" exact to="/">Главная</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active text-dark" to="/projects">Проекты</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active text-dark" to="/analitic">Аналитика</Link>
            </li>
        </ul>
        </div>

     )
}
 
export default NavBar