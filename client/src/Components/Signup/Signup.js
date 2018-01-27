import React from 'react';

const signup = (props) => {
    console.log(props);
    return (
        <div className="container-fluid signupcontent">
            <form onSubmit={props.handleSignup}>
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
                        <label htmlFor="Firstname">First Name</label>
                        <input type="text" className="form-control" name="firstname" placeholder="First Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="Lastname">Last Name</label>
                        <input type="text" className="form-control" name="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control" name="age" placeholder="Age" />
                    </div>
                </div>
                <div className="submit">
                        <input type="submit" value="submit" /> 
                    </div>
            </form>
        </div>
    )
}

export default signup;