import React from 'react';
import ProductItem from './ProductItem/ProductItem'

const products = (props) => {
    console.log(props);
    let productJsx = [];
    let jsxHtml = "";
    if(typeof props.products !== 'undefined' ){
        productJsx = props.products.map((product, idx) => {
            console.log(product)
            return (<ProductItem 
                        key={product.id} 
                        name={product.name}
                        price={product.price}
                        purchaseurl={product.purchaseurl}
                        promocode={product.promocode}
                        description={product.description}
                    />)
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
            </div>)
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