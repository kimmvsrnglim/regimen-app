import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import './MainNav.css';

class MainNav extends Component {
    render() {
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">Regimen</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse dual-collapse">
                        <ul className="navbar-nav d-flex justify-content-start">
                            <li className="nav-item">
                                <NavLink to="/home">Home</NavLink>
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
                        <ul className="navbar-nav d-flex justify-content-end">
                            <li className="nav-item">
                                <Scrollchor to="#what">What</Scrollchor>
                            </li>
                            <li className="nav-item">
                                <Scrollchor to="#how">How</Scrollchor>
                            </li>
                            <li className="nav-item">
                                <Scrollchor to="#who">Who</Scrollchor>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default MainNav;