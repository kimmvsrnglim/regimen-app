import React, { Component } from 'react';
import './What.css';

class What extends Component {
    render() {
        return(
                <div className="container-fluid" id="What">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <h3 className="WhatTitle" align="right">
                                What Is <span className="highlight">Regimen</span>?
                            </h3>
                            <p align="right" id="whatContent">
                                Regimen is a lifestyle application dedicated to individuals and their favorite products. In some cases, favorite products are coined as <span className="highlightWhat">'holy grail'</span> items. With their holy grail products, users are able to display their favorite <span className="highlightWhat">skincare</span>, haircare, grooming products, cosmetics products, or <span className="highlightWhat">food/dietary products</span>. 

                                Another aspect of Regimen is to not only showcase your holy grail items, but to <span className="highlightWhat">discover users</span> with lifestyle similarities and their own product showcase. 
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default What;