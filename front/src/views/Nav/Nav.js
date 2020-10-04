import React from 'react'
import {Link} from "react-router-dom"
import './Nav.css'
import logo from "../../logo.png"
import img2 from "../../img2.png"
function Nav() {
    return (
        <div className="nav">
            <Link to="/"><img className="logo" src = {logo} alt="logo"></img></Link>
            <ul>
                <li>
                    <Link to="/shop">SHOP</Link>
                </li>
                <li>
                    <Link to="/Portfolio">PORTFOLIO</Link>
                </li>
                <li>
                    <Link to="/Contact">CONTACT</Link>
                </li>
            </ul>
            <img className="image" src = {img2} alt="img2"></img>
        </div>
    )
}

export default Nav
