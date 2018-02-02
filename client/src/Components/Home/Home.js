import React from 'react';
import Header from './Header/Header';
import Profiles from '../Profiles/Profiles';
import Aux from '../../hoc/Aux/Aux';

const Home = () => {
    return (
        <Aux>
            <div className="container-fluid">
                <Header/>
            </div>
            <div className="container">
                <div className="col-sm-12">
                    <Profiles/>
                </div>
            </div>
        </Aux>
    );
}

export default Home;