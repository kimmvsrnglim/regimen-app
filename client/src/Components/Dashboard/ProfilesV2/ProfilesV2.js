import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import SideDrawer from '../SideDrawer/SideDrawer';
import './ProfilesV2.css';
import { Link,Route,Switch } from 'react-router-dom';
import axios from 'axios';
import Users from './../../Users/Users';

class ProfilesV2 extends Component {
    
    state = {
        users: []
    }
    
    componentDidMount() {
        axios({
            method: "GET",
            url: "/profiles",

        }).then(results => {
            console.log(results.data);
            this.setState({users: results.data});
        })
    }
    render() {
        console.log("PROFILEV2 PROPS");
        console.log(this.props)
        return (
            <Aux>
                <SideDrawer state={this.state}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ProfileBanner">
                                <div className="ProfilesHead">
                                    <h1 className="ProfilesTitle">Discover New
                                    <br/>Profiles
                                    <br/>
                                    -
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ProfileStuff">
                            <Switch>
                                <Route path={`${this.props.match.url}/:id`}

                                />
                                <Route
                                    path={`${this.props.match.url}`}
                                    render={() => {
                                        return(<Users data={this.state.users}/>
                                        )}}
                                />
                            </Switch>
                            {/* <Switch>
                                 <Route 
                                    path={`${this.props.match.url}/profiles`} 
                                    component={ProductForm} 
                                />
                                <Route 
                                    path={`${this.props.match.url}/profiles/:id`} 
                                    component={ProductFormEdit} 
                                />
                                <Route 
                                    path={`${this.props.match.url}`}
                                    render={() => {
                                        return (<Products 
                                            products={this.state.userData.products}
                                            handleProductDelete={this.handleProductDelete}
                                            handleProductEdit={this.handleProductEdit}
                                            modalOpen={this.state.modalOpen}
                                            onCloseModal={this.onCloseModal}
                                            onOpenModal={this.onOpenModal}
                                            state={this.state}
                                        />)
                                    }} 
                                />
                            </Switch> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ProfilesV2;