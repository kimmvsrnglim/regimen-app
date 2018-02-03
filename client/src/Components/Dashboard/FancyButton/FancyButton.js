import React from 'react';
import './FancyButton.css';
import Modal from 'react-responsive-modal'

const FancyButton = (props) => {

    console.log(props);
    return(
        <div className="FancyButton">
            <p>
                <button onClick={props.onOpenModal} className="btn">
                    Add A New Product Entry
                </button>
            </p>

            <Modal
                open={props.modalOpen}
                onClose={props.onCloseModal}
                
                classNames={{
                  transitionEnter: 'transition-enter',
                  transitionEnterActive: 'transition-enter-active',
                  transitionExit: 'transition-exit-active',
                  transitionExitActive: 'transition-exit-active',
                }}
                animationDuration={1000}
            >   
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
            </Modal>
        </div>
    )
}

export default FancyButton; 