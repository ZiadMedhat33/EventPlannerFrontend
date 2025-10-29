import { Link } from 'react-router-dom';
import './header-style.css'; 
export default function Header(){
    return(
        <>
            <nav>
                <div className="nav-upper-part">
                <div className="nav-title">
                    EventPlanner
                </div>
                <div className="nav-buttons">
                    <Link to={"/login"}><button className="login-button">login</button></Link>
                    <Link to={"/signup"}><button className="signup-button">signup</button></Link>
                </div>
                <div className="burger-icon"><i class="fa-solid fa-bars"></i></div>
                </div>
                <div className="nav-lower-part">
                    <div className="nav-items-contaienr">
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                        <p className="nav-item">placeholder</p>
                    </div>
                </div>
            </nav>
        </>
    )
}