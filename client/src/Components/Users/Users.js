import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Users.css';
import User from './User/User.js';

class Users extends Component {
    render() {
        console.log("USERS: ");
        console.log(this.props.data);
        
    let userJsx = [];
    let jsxHtml = "";
    
    //this is seems stupid and there is probably a better way to validate the products exist in state or not
    if(typeof this.props.data !== 'undefined' ){
        

         let row = [];
    //     let columns = 4;
    //     let rowCount = this.props.data.length % 4;
         let cardJsx = [];
    //     /* for(let x = 0; x < this.props.data.length; x++){
    //         if(x % columns === 0 && x !== 0){
    //             console.log("PUSHING: ");
    //             console.log(cardJsx);
    //             row.push(
    //             <div key={x} className="col-md-3 col-xs-6" align="center">
    //                 { cardJsx}</div>)
    //             cardJsx = [];
    //         }
    //         cardJsx.push(<ProductItem 
    //             key={this.props.data[x].id} 
    //             productId={this.props.data[x].id}
    //             name={this.props.data[x].name}
    //             price={this.props.data[x].price}
    //             purchaseurl={this.props.data[x].purchaseurl}
    //             promocode={this.props.data[x].promocode}
    //             url={this.props.data[x].url}
    //             description={this.props.data[x].description}
    //             handleProductEdit={props.handleProductEdit}
    //             handleProductDelete={props.handleProductDelete}
    //             state={props.state}
    //         />)

    //         if(x +1 === this.props.data.length){
    //             row.push(
    //             <div className="col-md-3 col-xs-6" align="center">
    //                 { cardJsx}</div>)
    //         }
    //     } */
        for(let x = 0; x < this.props.data.length; x++){
            
                 console.log("PUSHING: ");
                 console.log(cardJsx);
            
             cardJsx.push(<User 
                 key={this.props.data[x].id} 
                 userId={this.props.data[x].id}
                 firstname={this.props.data[x].firstname}
                 lastname={this.props.data[x].lastname}
                 age={this.props.data[x].age}
    //             price={this.props.data[x].price}
    //             purchaseurl={this.props.data[x].purchaseurl}
    //             promocode={this.props.data[x].promocode}
    //             url={this.props.data[x].url}
    //             description={this.props.data[x].description}
    //             handleProductEdit={props.handleProductEdit}
    //             handleProductDelete={props.handleProductDelete}
    //             state={props.state}
            />)

             row.push(
                 <div key={x} className="col-md-3 col-xs-6" align="center">
                     { cardJsx}</div>)
                cardJsx = [];

    //         /* if(x +1 === this.props.data.length){
    //             row.push(
    //             <div className="col-md-3 col-xs-6" align="center">
    //                 { cardJsx}</div>)
    //         } */
         }

         userJsx = row;
    //     /* productJsx = this.props.data.map((product, idx) => {
    //         console.log(product, idx);
            
            
    //         cardJsx = (<ProductItem 
    //             key={product.id} 
    //             productId={product.id}
    //             name={product.name}
    //             price={product.price}
    //             purchaseurl={product.purchaseurl}
    //             promocode={product.promocode}
    //             description={product.description}
    //             handleProductEdit={props.handleProductEdit}
    //             handleProductDelete={props.handleProductDelete}
    //             onCloseModal={props.onCloseModal}
    //             onOpenModal={props.onOpenModal}
    //         />)

            
    //         return cardJsx;
    //     }) */
         jsxHtml = (
             <div className="container-fluid products">
                 <div className="row">
                             {userJsx}
                    
                 </div>
             </div>
                    
                        
         )
    }else {
         jsxHtml = <p> Loading </p>
    }
    return (
        <div>
            {jsxHtml}
        </div>
    )
    }
}

export default Users;