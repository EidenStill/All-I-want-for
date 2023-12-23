import React from "react";
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css'
import Col from 'react-bootstrap/Col';
import { FaList, FaPlus, FaShoppingCart,FaHome } from 'react-icons/fa'; // Import FontAwesome icons

function Sidebar() {
    return (
        <div className="sidebar">
            <Nav className="me-auto flex-column">
            <Col>
                    <Nav.Link className="link fs-5" href="/home">
                        <FaHome className="icon" /> Home
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-5" href="/wishlist">
                        <FaList className="icon" /> My List
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-5" href="/home">
                        <FaShoppingCart  className="icon" /> Shop
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link className="link fs-5" href="/add">
                        <FaPlus className="icon" /> Add
                    </Nav.Link>
                </Col>
            </Nav>
        </div>
    );
}

export default Sidebar;