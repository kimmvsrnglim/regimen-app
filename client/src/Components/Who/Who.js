import React, { Component } from 'react';
import './Who.css';

class Who extends Component {
    render() {
        return(
                <div id="Who">
                    <div className="container">
                        <div className="row" id="Who">
                            <div className="col-sm-12">
                                <h3 className="WhatTitle" align="center">
                                    Who We Are
                                </h3>
                            </div>
                        </div>
                        <div className="row" id="AboutUs">
                            <div className="col-sm-6">
                                <h4 className="About1" align="right">
                                    Kim Lim
                                </h4>
                                <p align="right">
                                    Hi, I'm Kim. I'm a <span className="highlight1">front-end developer</span>. I started out my career in the <span className="highlight1">hospitality industry</span>, primarily in the restaurant business. <br/><br/>
                                    Overtime, I've been seeking a space to get more creative. I had experience with HTML/CSS and wanted to expand on that knowledge. That led to my interest to enroll in <span className="highlight1">DigitalCrafts</span> in Atlanta, GA. <br/> 
                                    
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="About2" align="left">
                                    Cliff Cole
                                </h4>
                                <p align="left">
                                    Hi, I'm Cliff. I'm a <span className="highlight2">full-stack developer</span> based in Atlanta, GA. My past experience was primarily in <span className="highlight2">Linux System Engineering</span>.
                                    <br/><br/>
                                    In my free time, I enjoy <span className="highlight2">hiking & mountain biking</span>. Recently, I wanted to gain more of a structured learning experience so I joined DigitalCrafts this past fall. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Who;