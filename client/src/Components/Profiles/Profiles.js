import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Profiles.css';
import Profile from './Profile/Profile.js';

class Profiles extends Component {
    render() {
        return (
            <div className="Profiles">
                <Row>
                    <Col xs={12} md={12} className="Profiles-Title">
                        <p className="Section-title">Featured Regimens</p>
                    </Col>
                </Row>
                <Row className="Featured">
		        	<Col xs={6} md={4} className="first">
		        		<Profile />
		        	</Col>
		        	<Col xs={6} md={4} className="second">
                        <Profile />
		        	</Col>
		        	<Col xs={6} md={4} className="third">
                        <Profile />
		        	</Col>
		        </Row>
            </div>
        )
    }
}

export default Profiles;