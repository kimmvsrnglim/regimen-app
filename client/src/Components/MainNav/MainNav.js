import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import {Logo} from '../Logo/Logo.png';
import './MainNav.css';

class MainNav extends Component {
    ifDisplay = () => {
        console.log(window.location.pathname)
        if (window.location.pathname === '/login' || window.location.pathname === '/signup') {
            return null;
        }
        return (
        <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
                <Scrollchor to="#What" animate={{offset: 20, duration: 600}}>What</Scrollchor>
            </li>
            <li className="nav-item">
                <Scrollchor to="#How" animate={{offset: 20, duration: 600}}>How</Scrollchor>
            </li>
            <li className="nav-item">
                <Scrollchor to="#Who" animate={{offset: 20, duration: 600}}>Who</Scrollchor>
            </li>
        </ul>);
    }
    render() {
        console.log(window.location);
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img src="./Logo.png" alt="Regimen" id="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse dual-collapse">
                        <ul className="navbar-nav d-flex justify-content-start">
                            <li className="nav-item">
                                <NavLink to="/home#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup">Sign Up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login">Log In</NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="navbar-collapse collapse dual-collapse">
                        {this.ifDisplay()}
                    </div>
                </nav>
        )
    }
}

export default MainNav;