import React, {Component} from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import './Dashboard.css';
import FancyButton from './FancyButton/FancyButton';
import Aux from '../../hoc/Aux/Aux';
//import ProductItem from '../ProductEntry/ProductItem';
import axios from 'axios';
import Products from './../Products/Products'

class Dashboard extends Component {
    state = {
        token: null,
        modalOpen: false,
        userData: null
    }
    
    componentWillMount() {
        //console.log(this.props);
        let token = this.props.location.token;
        this.setState(
            {
                userData: this.props.location.userData,
                token: token
            }
        );
    }

    componentDidMount() {
        this.getProductsByUserId();
    }

    getProductsByUserId() {
        let userData = this.state.userData;
        if(typeof userData !== 'undefined'){
            axios({
                method: "GET",
                url: "/product/" + this.state.userData.id
            }).then(results => {
                console.log(results.data);
                let products = results.data
                let newUserData = this.state.userData;
                newUserData['products'] = products;
                console.log("newUserData");
                console.log(newUserData);
                this.setState({userData: newUserData});
            })
        }
    }
    
    

    onOpenModal = () => {
        console.log("onOpenModal()")
        this.setState({ modalOpen: true });
    };
    
    onCloseModal = () => {
        console.log("onCloseModal()")
        this.setState({ modalOpen: false });
    };

    handleProductAdd = (event) => {
        event.preventDefault()
        console.log(event.target);
        let name = event.target.productname.value;
        let price = event.target.price.value;
        let purchaseurl = event.target.purchaseurl.value;
        let promocode = event.target.promocode.value;
        let description = event.target.description.value;
        let userId = this.state.userData.id;
        axios({
            method: "POST",
            url: "/product/add",
            data: {
                name: name,
                price: price,
                purchaseurl: purchaseurl,
                promocode: promocode,
                description: description,
                UserId: userId
            }
        }).then(results => {
            console.log(results.data);
            this.onCloseModal()
            this.getProductsByUserId(userId);
        }) 

    }

    handleProductEdit = (event) => {
        event.preventDefault();
        console.log(event.target)
    }

    handleProductDelete = (id) => {
        
        console.log("Product ID: "+id +" userId: "+ this.state.userData.id);
        axios({
            method: "DELETE",
            url: "/product/delete",
            data: {
                productId: id,
                userId: this.state.userData.id
            }
        }).then(results => {
            console.log(results);
            this.getProductsByUserId(this.state.userData.id);
        })
    }
    
    render() {

        let jsxHtml = "";
        
        if(this.props.location.token){ 
            jsxHtml = (
            <Aux>
                    <SideDrawer/>
                    <div className="container-fluid" id="DashContent">
                    <div className="row">
                        <div className="DashGreeting">
                            <h2 className="DashTitle">Hello, [USER]</h2>
                            <FancyButton
                                handleProductAdd={this.handleProductAdd}
                                modalOpen={this.state.modalOpen}
                                onCloseModal={this.onCloseModal}
                                onOpenModal={this.onOpenModal}
                            /> 
                        </div>
                    </div>
                </div>
                <Products 
                    products={this.state.userData.products}
                    handleProductDelete={this.handleProductDelete}
                    handleProductEdit={this.handleProductEdit}
                    modalOpen={this.state.modalOpen}
                    onCloseModal={this.onCloseModal}
                    onOpenModal={this.onOpenModal}
                />
            </Aux>
            );
        }else {
            this.props.history.push({
                pathname: '/login'
            })
        }
        return(
            <div>
            {jsxHtml}
            </div>
        )
    }
}

export default Dashboard;