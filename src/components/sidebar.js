import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css'
import Col from 'react-bootstrap/Col';

function Sidebar() {
    return (
        <div className="sidebar">
            <Nav className="me-auto flex-column">
                <Col>
                    <Nav.Link className="link fs-3" href="home">MY LIST</Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-3" href="about">RECENT</Nav.Link>
                </Col>
          </Nav>
        </div>
    );
}

export default Sidebar;