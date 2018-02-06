import React from 'react';
import ProductItem from './ProductItem/ProductItem'
import Aux from './../../hoc/Aux/Aux'
import Modal from './../Dashboard/Modal/Modal'

const products = (props) => {
    console.log(props);
    let productJsx = [];
    let jsxHtml = "";
    if(typeof props.products !== 'undefined' ){
        

        let rowLength = 4;
        let cardJsx = [];
        let cardDeck = "<div className=\"card-deck\">"
        let productsObj = [];
        let productGroup = [];
        let count = Math.ceil(props.products.length / 4);

        /* for(let x = 0; x < products.length; x++){

        } */
        /* console.log("LENGTH: "+props.products.length);
        console.log("Count: "+count);
        let aCount = 0;
        while(aCount < count){
            console.log("ACOUNT: "+aCount);
            for(let x = 0; x < props.products.length; x++){
                
                if(aCount !== 0 && x % 4 === 0 ){
                    console.log("Inside if");
                    productGroup[aCount].push(props.products[x]);
                    aCount++;
                }
                else {
                    productGroup[aCount].push(props.products[x]);
                    
                }
            }
        }
        console.log("PRODUCTGROUP: ");
        console.log(productGroup); */

        productJsx = props.products.map((product, idx) => {
            console.log(product, idx);
            

            cardJsx = (
                  
                <ProductItem 
                    key={product.id} 
                    productId={product.id}
                    name={product.name}
                    price={product.price}
                    purchaseurl={product.purchaseurl}
                    promocode={product.promocode}
                    description={product.description}
                    handleProductEdit={props.handleProductEdit}
                    handleProductDelete={props.handleProductDelete}
                    onCloseModal={props.onCloseModal}
                    onOpenModal={props.onOpenModal}
                /> 
            )
            return cardJsx;
        })
        jsxHtml = (<div className="container">
                <div className="row">
                    <div className="col-sm-12" align="center">
                        <h4 className="FavoriteTitle">
                        <span>Current // Favorite Products</span>
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12" id="DashCurrent">
                        {productJsx}
                    </div>
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

export default products;