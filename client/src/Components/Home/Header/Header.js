import React from 'react'; 
import './Header.css';
import MainNav2 from '../../MainNav/MainNav2';
import Aux from '../../../hoc/Aux/Aux';
//import Layout from '../../Layout/Layout';

const header = (props) => {
    return (
      <Aux>
          <MainNav2/>
          <header className="App-header">
              <div className="col-sm-12">
                  <h1 className="App-title">Regimen</h1>
              </div>
            <div className="row">
              <div className="col-sm-12" id="App-subtitle">
                  <h4 className="col-sm-12" id="Subtitle-bar">
                      <span>
                        Showcase your own profile + follow your favorite holy grail regimens
                      </span>
                  </h4>
              </div>
            </div>
          </header>
        </Aux>
    );
}

export default header;