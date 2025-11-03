import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import './header-style.css';
import { logout } from '../../Services/auth';
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from '../../Context/AuthContext';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState("");
    const { accessToken,setAccessToken } = useContext(AuthContext);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const handleLogout = async () => {
        try{
            setUsername("");
            logout();  
            setAccessToken("");
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        if (accessToken) {
            try {
                const decoded = jwtDecode(accessToken);
                setUsername(decoded.username || "");
            } catch (err) {
                console.error("Invalid token:", err);
            }
        }
    }, [accessToken]);
    return (
        <nav>
            <div className="nav-upper-part">
                <div className="nav-title">
                    <div className="burger-icon" onClick={toggleMenu}><i className="fa-solid fa-bars"></i></div>
                    EventPlanner
                </div>
                {!username ? (
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

