import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import thumbnail from './../../Profiles/Profile/ProfileIcon/thumbnail.png';

const productItem = (props) => {

    return (
        <Aux>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3" id="ProductImg" align="center">
                        <img src={thumbnail} alt="..." width="170px" className="rounded-circle" />
                    </div>
                    <div className="col-sm-9" id="ProductContent">
                        <h4 className="ProductName">{props.name}</h4>
                        <p className="ProductSubtitle">{props.price} // {props.purchaseurl} // {props.promocode}</p>
                        <p className="ProductDescription">{props.description}</p>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default productItem;