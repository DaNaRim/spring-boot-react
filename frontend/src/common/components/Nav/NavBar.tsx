import React from "react"
import {NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <div style={{height: "4rem", width: "20rem", margin: "0 auto", backgroundColor: "orange"}}>
            <ul style={{display: "flex"}}>
                <li style={{marginRight: "2rem"}}><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/posts">Posts</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar
