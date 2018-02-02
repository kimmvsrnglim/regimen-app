import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
//import Layout from './Components/Layout/Layout';
import { Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
//import axios from 'axios';


class App extends Component {

    
  render() {
      console.log(this.props);
    return (
        <div className="App">

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
                <Route 
                    path="/dashboard" 
                    component={Dashboard} 
                /> 
            
            <Footer />
        </div>
    );
  }
}

export default App;
