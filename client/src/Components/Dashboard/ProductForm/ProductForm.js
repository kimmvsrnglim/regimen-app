import React from 'react';

const productForm = (props) => {
    console.log(props);
    return(
        <div>
                <form onSubmit={(event) => props.handleProductAdd(event)}>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="productname">Product Name</label>
                                <input type="text" className="form-control" name="productname" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="price">Price</label>
                                <input type="price" className="form-control" name="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="purchase">Purchase</label>
                                <input type="text" className="form-control" name="purchaseurl" placeholder="Purchase" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="promocode">Promocode</label>
                                <input type="text" className="form-control" name="promocode" placeholder="Promocode" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Description" />
                            </div>
                        </div>
                        <div className="submit">
                                <input type="submit" value="submit" /> 
                            </div>
                    </form>
                </div>
    )
}
export default productForm