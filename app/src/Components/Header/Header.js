import { Link } from 'react-router-dom';
import React from "react";

import './header-style.css';
export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }
    const [loggedIn, setLoggedIn] = React.useState(false)
    function login() {
        setLoggedIn(!loggedIn)
    }
    return (
        <nav>
            <div className="nav-upper-part">
                <div className="nav-title">
                    <div className="burger-icon" onClick={toggleMenu}><i className="fa-solid fa-bars"></i></div>
                    EventPlanner
                </div>
                {!loggedIn ?
                    <div className="nav-buttons">
                        <Link to={"/login"}><button className="login-button" onClick={login}>login</button></Link>
                        <Link to={"/signup"}><button className="signup-button">signup</button></Link>
                    </div>
                    :
                    <div className="nav-buttons">
                        <Link to={"/login"}><button className="login-button" onClick={login}>logout</button></Link>
                    </div>
                }

            </div>
            <div className={`nav-lower-part ${menuOpen ? "open" : ""}`}>
                <div className="nav-items-contaienr">
                    <p className="nav-item">events</p>
                    <p className="nav-item">profile</p>
                </div>
            </div>
        </nav>
    )
}

