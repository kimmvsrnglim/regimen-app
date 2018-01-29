import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux';
import './SideDrawer.css';

class SideDrawer extends Component {
    render() {
        return (
            <div class="sidenav">
                <a href="#home">Home</a>
                <a href="#dashboard">Dashboard</a>
                <a href="#settings">Settings</a>
                <a href="#logout">Logout</a>
            </div>
        )
    }
}

export default SideDrawer;