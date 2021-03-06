import React, { Component } from 'react';
//import GoogleLogin from 'react-google-login';
import axios from 'axios';
import LoginForm from './LoginForm/LoginForm';
//import Dashboard from '../Dashboard/Dashboard';
//import Aux from '../../hoc/Aux/Aux';
import MainNav from '../MainNav/MainNav';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                id: null,
                username: null,
                firstname: null,
                lastname: null,
                age: null
            },
            token: null,            
            value:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        }

        handleChange = (event) => {
            this.setState( {value: event.target.value} );
        }

        handleSubmit = (event) => {
            alert('User input was submitted: ' + this.state.value);
            event.preventDefault();
        }

        // submitAuthRequestToServer = () => {
        //     axios.get('/')
        //     .then(({ response }) => {
        //         this.setState
        //     })
        // }

        responseGoogle = (response) => {
            console.log(response);
            this.setState({
                token: response.tokenId,
                name: response.profileObj.name,
                tokenExpiresAt: response.tokenObj.expires_at,
            });
            this.submitAuthRequestToServer(this.state.token, this.state.tokenExpiresAt); 
        }
        
        handleLogin = (event) => {
            event.preventDefault();
            let username = event.target.username.value;
            let password = event.target.password.value;
            console.log(event.target.username.value, event.target.password.value);

            axios({
                method: 'POST',
                url: '/login',
                data: {
                    username: username,
                    password: password
                }
            }).then(results => {
                console.log(results.data);
                this.setState(
                    {
                        userData: results.data.userData,
                        token: results.data.token
                    }
                )
                
                this.props.history.push({
                    pathname: '/Dashboard',
                    token: results.data.token,
                    userData: results.data.userData
                })
            })
        }


    render() {
        
        let jsxHtml = <LoginForm handleLogin={this.handleLogin}/>
        

        return (
            <div>
                <MainNav/>
                <div className="LoginTitle">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="LoginImage">
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="Greeting1">
                                    <h1 className="Greet">Welcome</h1>
                                </div>
                                <div className="Greeting2">
                                    <h2><i>Member Login</i></h2>
                                </div>
                                <div className="LoginInput">
                                    {jsxHtml}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
             /* <div className="loginForm">
                <form onSubmit={(event) => this.handleLogin(event)}>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="username">Email</label>
                            <input type="text" className="form-control" name="username" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input className="btn btn-secondary" type="submit" value="Log In" />
                        </div> 
                    </div>
                </form> 
                
                <div className="google-btns">
                    <GoogleLogin
                        clientId="309883270432-v3sflgm6vros7cqh1d1n5jd3qpg8q9pa.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={ this.responseGoogle }
                        onFailure={ this.responseGoogle }
                    />
                    
                </div> 

        </div>*/
        )
    }
}

export default Login;