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
    useEffect(() => {
        const checkLoginStatus = async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            setLoggedIn(false);
            return;
        }
        try {
            let res = await fetch("http://localhost:4000/profile", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            credentials: "include",
            });
            if (res.status === 403) {
            const refreshRes = await fetch("http://localhost:4000/refresh", {
                method: "POST",
                credentials: "include",
            });
            if (!refreshRes.ok) throw new Error("Refresh failed");
            const data = await refreshRes.json();
            localStorage.setItem("accessToken", data.accessToken);
            res = await fetch("http://localhost:4000/profile", {
                headers: {
                "Authorization": `Bearer ${data.accessToken}`,
                },
            });
            }
            const data = await res.json();
            setUsername(data.username);
            setLoggedIn(true);
        } catch (err) {
            console.error("Error checking login:", err);
            setLoggedIn(false);
        }
        };
        checkLoginStatus();
    }, []);
    const handleLogout = async () => {
        try {
        await fetch("http://localhost:4000/auth/logout", {
            method: "DELETE",
            credentials: "include",
        });
        localStorage.removeItem("accessToken");
        setLoggedIn(false);
        setUsername("");
        } catch (err) {
        console.error("Logout failed", err);
        }
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

