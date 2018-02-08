import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import thumbnail from './thumbnail.png';
import './ProfileIcon.css';

class ProfileIcon extends Component {
    render() {
        return (
            <Row className="Profile Icon">
                <Col xs={12} md={12}>
                    <Image href="#" alt="100x100" src={thumbnail} circle />
                </Col>
            </Row>
        )
    }
}

export default ProfileIcon;