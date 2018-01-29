import React, {Component} from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import './Dashboard.css';
import FancyButton from './FancyButton/FancyButton';
import Aux from '../../hoc/Aux/Aux';
import ProductEntry from '../ProductEntry/ProductEntry';

class Dashboard extends Component {
    render() {
        return(
            <Aux>
                <SideDrawer/>
                <div className="container" id="DashContent">
                    <div className="DashGreeting">
                        <h2 className="DashTitle">Welcome to Your Dashboard</h2>
                        <FancyButton/>
                    </div>
                    <div className="DashCurrent">
                        <h4 className="FavoriteTitle">
                            <span>Current // Favorite Products</span>
                        </h4>
                        <ProductEntry/>
                        <ProductEntry/>
                        <ProductEntry/>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Dashboard;