import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div style={{height: "4rem", width: "20rem", margin: "0 auto"}}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Add user</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar
