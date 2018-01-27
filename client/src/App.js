import React, { Component } from 'react';
import './App.css';
import MainNav from './Components/MainNav/MainNav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import { Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';


class App extends Component {

    handleSignup = (event) => {
        event.preventDefault();
        
        let username = event.target.username.value;
        let password = event.target.password.value;
        let firstName = event.target.firstname.value;
        let lastName = event.target.lastname.value;
        let age = event.target.age.value;

        console.log(username,password,firstName,lastName,age);

        //axios stuff here
    }
  render() {
    return (
        <div className="App">
            <MainNav />
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route 
                    path="/signup" 
                    render={() => <Signup 
                        handleSignup={this.handleSignup} 
                    />} 
                /> 
            </Layout>
            <Footer />
        </div>
    );
  }
}

export default App;
