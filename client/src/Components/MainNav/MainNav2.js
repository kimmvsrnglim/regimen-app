import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo.png';
import './MainNav2.css';

export default class MenuExampleStackable extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu>
            <img src='/logo.png' className="logo-img" />
  
            <Menu.Item
                name='home'
                as={Link} to='/home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
            >
            Home
            </Menu.Item>
  
            <Menu.Item
                name='login'
                as={Link} to='/login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
            >
            Log In
            </Menu.Item>

            <Menu.Item
            name='sign-up'
            as={Link} to='/signup'
            active={activeItem === 'sign-up'}
            onClick={this.handleItemClick}
            >
            Sign Up
            </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item 
                name='What' 
                as={Link} to='/what'
                active={activeItem === 'what'} 
                onClick={this.handleItemClick}
            >
            What
            </Menu.Item>
            <Menu.Item 
                name='How' 
                as={Link} to='/how'
                active={activeItem === 'how'} 
                onClick={this.handleItemClick}
            >
            How
            </Menu.Item>
            <Menu.Item 
                name='Who' 
                as={Link} to='/who'
                active={activeItem === 'who'} 
                onClick={this.handleItemClick}
            >
            Who
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
  