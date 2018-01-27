import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';


const MainNav = () => {
    return (
            <div className="MainNav">
                <ul>
                    <li className="NavOptions"><Link to="/home">Home</Link></li>
                    <li className="NavOptions"><Link to="/signup">Sign Up</Link></li>
                    <li className="NavOptions"><Link to="/login">Log In</Link></li>
                </ul>
            </div>
    );
}

export default MainNav;