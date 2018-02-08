import React from 'react';
import ProductItem from './ProductItem/ProductItem'
import Aux from './../../hoc/Aux/Aux'

const products = (props) => {
    console.log(props);
    let productJsx = [];
    let jsxHtml = "";
    
    //this is seems stupid and there is probably a better way to validate the products exist in state or not
    if(typeof props.products !== 'undefined' ){
        

        let row = [];
        let columns = 4;
        let rowCount = props.products.length % 4;
        let cardJsx = [];
        for(let x = 0; x < props.products.length; x++){
            if(x % columns === 0){
                console.log("PUSHING: ");
                console.log(cardJsx);
                row.push(<div key={x} className="row">
                <div className="col" align="center">
                    <div className="card-deck"> { cardJsx}</div></div></div>)
                cardJsx = [];
            }
            cardJsx.push(<ProductItem 
                key={props.products[x].id} 
                productId={props.products[x].id}
                name={props.products[x].name}
                price={props.products[x].price}
                purchaseurl={props.products[x].purchaseurl}
                promocode={props.products[x].promocode}
                description={props.products[x].description}
                handleProductEdit={props.handleProductEdit}
                handleProductDelete={props.handleProductDelete}
                onCloseModal={props.onCloseModal}
                onOpenModal={props.onOpenModal}
                state={props.state}
            />)

            if(x +1 === props.products.length){
                row.push(<div key={x} className="row">
                <div className="col" align="center">
                    <div className="card-deck"> { cardJsx}</div></div></div>)
            }
        }

        productJsx = row;
        /* productJsx = props.products.map((product, idx) => {
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
        }) */
        jsxHtml = (
            <div className="container-fluid">
                
                            {productJsx}
                    
                    
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