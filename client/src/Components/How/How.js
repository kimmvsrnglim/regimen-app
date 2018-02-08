import React, { Component } from 'react';
import './How.css';
import Aux from '../../hoc/Aux/Aux';

class How extends Component {
    render() {
        return(
                <Aux>
                    <div id="How">
                        <div className="row no-gutter">
                            <div className="col-sm-6">
                                <div className="imgbg1">
                                    <div className="colorbg1">
                                        <p className="HowHalf2"></p>
                                        <h1 className="HowTitle" align="center">How to Start</h1>  
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="bgcolor">
                                    <p className="HowHalf1">
                                        <span className="highlightHow">First</span> - sign up and create your user bio. This section will include your age, hair type, skin type & dietary preference. When other users seek inspiration, these details will help bridge similar users with their favorite products! 
                                        <br/><br/>
                                        <span className="highlightHow">Second</span> - post your holy grail products to your profile. This will help build your showcase, and overtime you'll be able to edit or delete your items. Skip this part if you simply want to browse product lists created by others. You'll be able to preview the product, find where the product can be bought, gain access to a promo code & view a quick description of why the user considers the item a holy grail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Aux>
        );
    }
}

export default How;