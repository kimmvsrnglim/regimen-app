import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import LoginForm from './LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import Aux from '../../hoc/Aux/Aux';
import MainNav from '../MainNav/MainNav';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {

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
                console.log(results.data.token);
                this.setState({token: results.data.token})
                
            })
        }


    render() {
        let jsxHtml = "";
        if (this.state.token) {
            jsxHtml = (<Dashboard/>)
        }
        else {
            jsxHtml = <LoginForm handleLogin={this.handleLogin}/>
        }

        return (
            <div>
            <MainNav/>
            {jsxHtml}
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