import React, { Component } from 'react';
import './How.css';
import Aux from '../../hoc/Aux/Aux';

class How extends Component {
    render() {
        return(
                <Aux>
                    <div className="row no-gutter" id="How">
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
                                    First - customize your personal bio so Regimen users get an understanding of personal traits that contribute to the deciding factor for your holy grail showcase. 
                                <br/><br/><br/>
                                    [insert example here]
                                </p>
                            </div>
                        </div>
                    </div>
                </Aux>
        );
    }
}

export default How;