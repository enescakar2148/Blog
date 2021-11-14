import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css";

export default function Navbar() {
    return (
        <div className="nav-swapper">
            <nav>
            <h1 id="title">Enes Çakar</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Blog/about">About</NavLink></li>
                    <li><NavLink to="/Blog/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
