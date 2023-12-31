import Container from "react-bootstrap/Container";
import "../styles/navbar.css";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setName] = useState('User')

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        if (res.data.valid) {
          setIsLoggedIn(true);
          setName(res.data.name)
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = () => {

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/logout")
      .then((res) => {
        if (res.data.success) {
          navigate("/")
          setIsLoggedIn(false);
        }
      })
      .catch((err) => console.log(err));
    
  };

  // Simulate loading delay
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);


  return (

    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container className="custom-container" >
        <Navbar.Brand href="/">
          {isLoading ? <Skeleton width={30} height={30} /> : <img
            src="/images/Logo.png"
            style={{ width: '2rem', objectFit: 'cover' }} // adjust this value for the desired width as a percentage
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav className="me-auto">
            {isLoading ? (
              <>
                <Skeleton width={30} height={30} />
                <Skeleton style={{ marginLeft: 10 }} width={30} height={30} />
              </>
            ) : (
              <>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </>
            )}
          </Nav>

          {isLoggedIn ? (
            <NavDropdown
              title={
                <span>
                  <FaUser className="profile-icon" size={40} color="grey" />
                  <span className="user-name">{userName}</span>
                </span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                className="dropdown-item"
                href="#account-settings"
              >Account Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item"
                onClick={handleLogout}
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            isLoading ? <Skeleton width={40} height={30} /> :
              <Nav.Link href="/signin" className="btn btn-outline-success sign-in-link" onClick={handleLogin}>
                Sign In
              </Nav.Link>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;