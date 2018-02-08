import React, {Component} from 'react';
import axios from 'axios';
import './Signup.css';
import Aux from '../../hoc/Aux/Aux';
import MainNav from '../MainNav/MainNav';


class Signup extends Component {

    handleSignup = (event) => {
        event.preventDefault();
        console.log("IN Signup");
        let username = event.target.username.value;
        let password = event.target.password.value;
        let firstName = event.target.firstname.value;
        let lastName = event.target.lastname.value;
        let age = event.target.age.value;

        console.log(username,password,firstName,lastName,age);

        axios({
            method: "POST",
            url: "/signup",
            data: {
                username: username,
                password: password,
                firstname: firstName,
                lastname: lastName,
                age: age
            }
        }).then(results => {
            console.log(results);
            this.props.history.push({
                pathname: '/login'
                
            })
        })
    }

    render(){
        return (
            <Aux>
                <MainNav/>
                <div className="LogoDiv">
                    <img src="./Logo.png" id="SignUpLogo" align="center" />
                </div>
                <div className="container" id="signupContent">
                    <div className="SignupTitle">
                        <h1 className="Greet" align="center">Get Started</h1>
                    </div>
                    <div className="SignupForm">
                        <form onSubmit={(event) => this.handleSignup(event)}>
                            <div className="form-row">
                                <div className="col">
                                    {/* <label htmlFor="username">Email</label> */}
                                    <input type="text" className="form-control" name="username" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    {/* <label htmlFor="password">Password</label> */}
                                    <input type="password" className="form-control" name="password" placeholder="P A S S W O R D" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    {/* <label htmlFor="Firstname">First Name</label> */}
                                    <input type="text" className="form-control" name="firstname" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    {/* <label htmlFor="Lastname">Last Name</label> */}
                                    <input type="text" className="form-control" name="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    {/* <label htmlFor="age">Age</label> */}
                                    <input type="text" className="form-control" name="age" placeholder="Age" />
                                </div>
                            </div>
                            <div className="submit">
                                    <input className="btn btn-outline-dark btn-lg btn-block" type="submit" value="submit" /> 
                                </div>
                        </form>
                    </div>
                </div>
            </Aux>
        )    
    }  
}

export default Signup;