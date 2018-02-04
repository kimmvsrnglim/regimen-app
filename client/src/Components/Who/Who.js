import React, { Component } from 'react';
import './Who.css';

class Who extends Component {
    render() {
        return(
                <div className="container-fluid">
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
                                Nine hundred years of time and space, and I've never been slapped by someone's mother. Jelly baby? Oh my word! Geronimo! Run. Oh, for God's sake! Gallfrey stands! I've reversed the polarity of the Neutron flow, so the TARDIS should be free from the force field now. Sorry, must dash! We're trying to defeat the Daleks, not start a jumble sale! It's a fez. I wear a fez now. Fezzes are cool. You can spend the rest of your life with me, but I can't spend the rest of mine with you. I have to live on. Alone. That's the curse of the Time Lords.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <h4 className="About2" align="left">
                                Cliff Cole
                            </h4>
                            <p align="left">
                                Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
                                <br/><br/>
                                Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Who;