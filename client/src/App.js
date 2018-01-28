import React, { Component } from 'react';
import './App.css';
import MainNav from './Components/MainNav/MainNav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
//import Layout from './Components/Layout/Layout';
import { Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
//import axios from 'axios';


class App extends Component {

    
  render() {
      console.log(this.props);
    return (
        <div className="App">
            <MainNav />
            
                <Route 
                    exact 
                    path="/" 
                    component={Home} 
                />
                <Route 
                    path="/home" 
                    component={Home} 
                />
                <Route 
                    path="/login" 
                    component={Login} 
                />
                <Route 
                    path="/signup" 
                    component={Signup} 
                /> 
            
            <Footer />
        </div>
    );
  }
}

export default App;
