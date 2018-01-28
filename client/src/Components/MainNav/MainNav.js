import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import './MainNav.css';
import BurgerMenu from 'react-burger-menu';
import MenuWrap from './../MenuWrap/MenuWrap'
import BurgerIcon from 'react-burger-menu';

class MainNav extends Component {
    state = {
        currentMenu: 'slide',
        side: 'left',

      };
    getMenu = () => {
        const Menu = BurgerMenu[this.state.currentMenu];
        const items = [
            <a key="0" href=""><i className="fa fa-fw fa-star-o" /><span>Favorites</span></a>,
            <a key="1" href=""><i className="fa fa-fw fa-bell-o" /><span>Alerts</span></a>,
            <a key="2" href=""><i className="fa fa-fw fa-envelope-o" /><span>Messages</span></a>,
            <a key="3" href=""><i className="fa fa-fw fa-comment-o" /><span>Comments</span></a>,
            <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o" /><span>Analytics</span></a>,
            <a key="5" href=""><i className="fa fa-fw fa-newspaper-o" /><span>Reading List</span></a>
          ];
  
        let jsx;
    
        jsx = (
            
              <a><Menu  >
                {items}
              </Menu></a>
            
          );
        return jsx;
      }
      
    render() {
        return (
            <div className="MainNav">
            
            
                
                {/*{this.getMenu()}*/}
            
            
           
                <ul>
                    <li className="NavOptions"><NavLink to="/home">Home</NavLink></li>
                    <li className="NavOptions"><NavLink to="/signup">Sign Up</NavLink></li>
                    <li className="NavOptions"><NavLink to="/login">Log In</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default MainNav;
