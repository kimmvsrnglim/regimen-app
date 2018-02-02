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
                <div className="container-fluid" id="DashContent">
                    <div className="row">
                        <div className="DashGreeting">
                            <h2 className="DashTitle">Welcome to Your Dashboard</h2>
                            <FancyButton/> 
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12" align="center">
                            <h4 className="FavoriteTitle">
                            <span>Current // Favorite Products</span>
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12" id="DashCurrent">
                            <ProductEntry/>
                            <ProductEntry/>
                            <ProductEntry/>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Dashboard;