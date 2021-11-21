import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css";

export default function Navbar() {
    return (
        <div className="nav-swapper">
            <nav>
            <h1 id="title">Enes Çakar</h1>
                <ul>
                    <li><NavLink to="/Blog">Home</NavLink></li>
                    <li><NavLink to="/Blog/about">About</NavLink></li>
                    <li><NavLink to="/Blog/contact">Contact</NavLink></li>
                    {/* <li id="sign-in"><NavLink to="/Blog/sign-in">Sign In</NavLink></li>
                    <li id="sign-up"><NavLink to="/Blog/sign-up">Sign Up</NavLink></li> */}
                </ul>
            </nav>
        </div>
    )
}
