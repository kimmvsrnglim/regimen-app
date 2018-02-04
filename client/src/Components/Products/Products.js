import React from 'react';
import ProductItem from './ProductItem/ProductItem'
import Aux from './../../hoc/Aux/Aux'

const products = (props) => {
    console.log(props);
    let productJsx = [];
    let jsxHtml = "";
    
    //this is seems stupid and there is probably a better way to validate the products exist in state or not
    if(typeof props.products !== 'undefined' ){
        

        let rowLength = 4;
        let cardJsx = [];
        let cardDeck = "<div className=\"card-deck\">"
        
        productJsx = props.products.map((product, idx) => {
            console.log(product, idx);
            
            
            cardJsx = (<ProductItem 
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
            />)

            
            return cardJsx;
        })
        jsxHtml = (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" align="center">
                        <div className="card-deck">
                            {productJsx}
                        </div>
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