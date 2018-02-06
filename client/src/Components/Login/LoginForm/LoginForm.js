import React from 'react';
import './LoginForm.css';

const loginform = (props) => {
    console.log()
    return (
        <div className="loginForm">
                <form onSubmit={(event) => props.handleLogin(event)}>
                    <div className="form-row">
                        <div className="col">
                            {/* <label htmlFor="username">Email</label> */}
                            <input type="text" className="form-control" name="username" placeholder="E M A I L" />
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
                            <input className="btn btn-outline-dark btn-lg btn-block" type="submit" value="L O G I N" />
                        </div> 
                    </div>
                </form>
        </div>
    )
}

export default loginform;