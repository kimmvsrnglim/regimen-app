import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import thumbnail from './../../Profiles/Profile/ProfileIcon/thumbnail.png';

const productItem = (props) => {

    return (
        <Aux>
            <div className="card">
                <img className="card-img-top" src={thumbnail} />
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
                        <button className="btn btn-sm btn-outline-info" onClick={props.onOpenModal}>Edit</button>
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