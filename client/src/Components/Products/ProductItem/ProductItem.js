import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import thumbnail from './../../Profiles/Profile/ProfileIcon/thumbnail.png';
import './ProductItem.css';
import {Link} from 'react-router-dom';

const productItem = (props) => {
    console.log("PRODUCTITEM!!!!!!!!!!: ");
    console.log(props)
    
    return (
        <Aux>
            
            <div className="card">
                <img className="card-img-top" src={props.url} />
                <div className="card-body">
                    <h5 className="card-Title">{props.name}</h5>
                    <p className="card-text"><small>{props.description}</small></p>
                    <p className="card-text"><small>Price: {props.price}</small></p>
                    <p className="card-text"><small><a href={props.purchaseurl}>Buy</a></small></p>
                    <p className="card-text"><small>Promo: {props.promocode}</small></p>
                </div>
                <div className="card-footer">
                    <div className="row">
                    <div className="col">
                    <Link to={{
                              pathname: '/Dashboard/product/edit',
                              state:  props.state,
                              product: props,
                              token: props.state.token,
                              handleProductEdit: props.handleProductEdit
                            }}>
                        <button className="btn btn-sm btn-outline-info">Edit</button>
                    </Link>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-outline-danger" onClick={() => props.handleProductDelete(props.productId)}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
                      
        </Aux>
    )
}

export default productItem;