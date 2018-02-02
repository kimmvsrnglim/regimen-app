import React from 'react'; 
import './Header.css';
import MainNav from '../../MainNav/MainNav';
import Aux from '../../../hoc/Aux/Aux';
//import Layout from '../../Layout/Layout';

const header = (props) => {
    return (
      <Aux>
          <MainNav/>
          <header className="App-header">
            <div><h1 className="App-title">Regimen</h1></div>
            <div className="App-subtitle">
              <h4 className="Subtitle-bar">
              <span>
                Showcase your own profile + follow your favorite holy grail regimens
              </span>
              </h4>
            </div>
          </header>
        </Aux>
    );
}

export default header;