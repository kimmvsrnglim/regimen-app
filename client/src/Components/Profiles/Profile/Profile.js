import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Profile.css';
import ProfileIcon from './ProfileIcon/ProfileIcon';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <div className="Icon">
                    <ProfileIcon />
                </div>
                <div className="Content">
                    <p>USERNAME</p>
                    <ul className="SmBio">
                        <li>age range</li>
                        <li>hair color / texture</li>
                        <li>dietary preference</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Profile;

