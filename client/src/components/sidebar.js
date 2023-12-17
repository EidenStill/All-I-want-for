import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css'
import Col from 'react-bootstrap/Col';
import { FaList, FaHistory, FaPlus } from 'react-icons/fa'; // Import FontAwesome icons

function Sidebar() {
    return (
        <div className="sidebar">
            <Nav className="me-auto flex-column">
                <Col>
                    <Nav.Link className="link fs-5" href="home">
                        <FaList className="icon" /> My List
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-5" href="about">
                        <FaHistory className="icon" /> Recent
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-5" href="about">
                        <FaPlus className="icon" /> Add
                    </Nav.Link>
                </Col>
            </Nav>
        </div>
    );
}

export default Sidebar;