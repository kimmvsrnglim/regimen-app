import React from 'react';
import Header from './Header/Header';
import Profiles from '../Users/Users';
import Aux from '../../hoc/Aux/Aux';
import What from '../What/What';
import How from '../How/How';
import Who from '../Who/Who';

const Home = () => {
    return (
        <Aux>
            <div className="container-fluid">
                <Header/>
            </div>
            <What/>
            <How/>
            <Who/>
        </Aux>
    );
}

export default Home;