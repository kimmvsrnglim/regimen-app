import React, { Component } from 'react';
//import { Row, Col } from 'react-bootstrap';
import './User.css';
import ProfileIcon from './ProfileIcon/ProfileIcon';
import {Link} from 'react-router-dom';
import thumbnail from './../../Users/User/ProfileIcon/thumbnail.png';
const user = (props) => {
    console.log("USERS PROPS");
    console.log(this.props);
    

    return (
        <div className="card h-100">
            <img className="card-img-top img-fluid rounded-circle" src={thumbnail}  />
                <div className="card-block">
                    <h5 className="card-title">{props.firstname}</h5>
                    <p className="card-text"><small>{props.age}</small></p>
                    <p className="card-text"><small></small></p>
                    <p className="card-text"><small></small></p>
                    <p className="card-text"><small></small></p>
                </div>
                
                
            </div>
    )
        // return (
        //     <div className="Profile">
        //         <div className="Icon">
        //             <ProfileIcon />
        //         </div>
        //         <div className="Content">
        //             <p>USERNAME</p>
        //             <ul className="SmBio">
        //                 <li>age range</li>
        //                 <li>hair color / texture</li>
        //                 <li>dietary preference</li>
        //             </ul>
        //         </div>
        //     </div>
        // )
    }


export default user;

