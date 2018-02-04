import React, { Component } from 'react';
import './What.css';

class What extends Component {
    render() {
        return(
                <div className="container-fluid">
                    <div className="row" id="What">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-8">
                            <h3 className="WhatTitle" align="right">What Is Regimen?</h3>
                            <p align="right">
                                I'd call you a genius, except I'm in the room. Goodbye...my Sarah Jane! People assume that time is a strict progression of cause-and-effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff. I'm the Doctor, I can save the world with a kettle and some string! And look! I'm wearing a vegetable! I'm sorry. I'm so sorry. I'm Dr. James McCrimmon from the township of Balamory. There was a war. A Time War. The Last Great Time War. My people fought a race called the Daleks, for the sake of all creation. And they lost. We lost. Everyone lost. They're all gone now. My family. My friends. Even that sky.
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default What;