import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value:''};

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
        

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> Username: </label>
                        <input type="text" name="username" value={this.state.value} onChange=       {this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <label> Password: </label>
                        <input type="password" name="password" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <input type="submit" value="Log In" />
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

            </div>
        )
    }
}

export default Login;