import React from 'react';

const loginform = (props) => {
    console.log()
    return (
        <div className="loginForm">
                <form onSubmit={(event) => props.handleLogin(event)}>
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
            </div>
    )
}

export default loginform;