import React from 'react';
import Header from './Header/Header';
import Profiles from '../Profiles/Profiles';
import Aux from '../../hoc/Aux/Aux';

const Home = () => {
    return (
        <Aux>
            <Header/>
            <Profiles/>
        </Aux>
    );
}

export default Home;