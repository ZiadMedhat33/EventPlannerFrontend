import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './header-style.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleLogout = async () => {
        let res = await fetch("http://localhost:4000/auth/logout", {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("refreshToken")}`,
            },
        });
    };
    return (
        <nav>
            <div className="nav-upper-part">
                <div className="nav-title">
                    <div className="burger-icon" onClick={toggleMenu}><i class="fa-solid fa-bars"></i></div>
                    EventPlanner
                </div>
                {!loggedIn ? (
                    <div className="nav-buttons">
                        <Link to="/login">
                            <button className="login-button">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signup-button">Signup</button>
                        </Link>
                    </div>
                ) : (
                    <div className="nav-buttons">
                        <p>Welcome, {username}</p>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
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

