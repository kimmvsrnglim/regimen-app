import React, {Component} from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
//import Aux from '../../../hoc/Aux/Aux';
import './SideDrawer.css';


class SideDrawer extends Component {

  render () {
    return (
        <Menu width={ '220px' }>
          <Link to="Home" className="menu-item" href="/">Home</Link>
          <Link to="Dashboard" className="menu-item" href="/dashboard">My Dash</Link>
          <Link to="ProfilesV2" className="menu-item" href="/ProfilesV2">Profiles</Link>
          <Link to="Logout" className="menu-item" href="/logout">Logout</Link>
        </Menu>
    );
  }
}

export default SideDrawer;