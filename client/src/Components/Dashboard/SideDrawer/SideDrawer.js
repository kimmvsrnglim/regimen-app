import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux';
import './SideDrawer.css';


class SideDrawer extends Component {

  render () {
    return (
        <Menu>
          <Link to="home" className="menu-item" href="/">Home</Link>
          <Link to="about" className="menu-item" href="/login">Login</Link>
          <Link to="contact" className="menu-item" href="/signin">Signin</Link>
        </Menu>
    );
  }
}

export default SideDrawer;