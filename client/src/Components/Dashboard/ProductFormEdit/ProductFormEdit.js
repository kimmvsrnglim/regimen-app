import React from 'react';

const productFormEdit = (props) => {
    console.log("DAPROPS");
    console.log(props);
    let product = {...props.location.product}
    console.log(product);
    return(
        <div className="container">
                <form onSubmit={(event) => props.location.handleProductEdit(event, props)}>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="productname">Product Name</label>
                                <input type="text" className="form-control" name="productname" placeholder="Name" defaultValue={product.name} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="imgurl">Img Url</label>
                                <input type="text" className="form-control" name="imgurl" placeholder="Image Url" defaultValue={product.url}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="price">Price</label>
                                <input type="price" className="form-control" name="price" placeholder="Price" defaultValue={product.price}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="purchase">Purchase</label>
                                <input type="text" className="form-control" name="purchaseurl" placeholder="Purchase" defaultValue={product.purchaseurl}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="promocode">Promocode</label>
                                <input type="text" className="form-control" name="promocode" placeholder="Promocode" defaultValue={product.promocode}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Description" defaultValue={product.description}/>
                            </div>
                        </div>
                        <input type="hidden" className="form-control" name="productid" defaultValue={product.productId}/>
                        <div className="submit">
                                <input type="submit" value="submit" /> 
                            </div>
                    </form>
                </div>
    )
}
export default productFormEdit