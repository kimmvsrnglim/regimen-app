import React, { Component } from 'react';
import './How.css';

class How extends Component {
    render() {
        return(
                <div className="container-fluid">
                    <div className="row" id="How">
                        <div className="col-sm-6">
                            <h3 className="HowTitle" align="center">How to Start</h3>
                            <p className="HowHalf1">
                                First - customize your personal bio so Regimen users get an understanding of personal traits that contribute to the deciding factor for your holy grail showcase. 
                            <br/><br/><br/>
                                [insert example here]
                            </p>
                        </div>
                        <div className="col-sm-6 align-middle">
                            <div className="imgbg1">
                                <p className="HowHalf2">
                                    Then - post your favorite lifestyle           products to your profile. Regimen users will be able to publish to their own profiles, and view others as well.
                                <br/><br/><br/>
                                    [insert example here]
                                </p>   
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default How;