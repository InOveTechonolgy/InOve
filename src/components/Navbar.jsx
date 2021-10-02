import React from 'react'
import "./Navbar.css"
import logo from "../assets/imgs/logov2.png"
function Navbar() {
    return (
        <div className="navbar">
            <a href="#home" className="brand-logo">
                <img src={logo} alt="brand-logo" />
            </a>
            <nav>
                <ul>
                    <li>
                        <div><a href="/#top">Home</a></div>
                    </li>
                    <li>
                        <div><a href="#services">Services</a></div>
                    </li>
                    <li>
                        <div><a href="#technology">Technology</a></div>
                    </li>
                    <li>
                        <div><a href="#about">About</a></div>
                    </li>
                    <li>
                        <div><a href="#join">Join us</a></div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
