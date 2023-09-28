import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/navbar.css'; 

function LandingNavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showNavLinks, setShowNavLinks] = useState(windowWidth >= 992);

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleShowOffcanvas = () => {
    setShowOffcanvas(true);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    setShowNavLinks(window.innerWidth >= 992);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className=" bg-body-tertiary navbar">
        <Container class="custom-navbar">
          <Navbar.Brand>
          <img
              src="/images/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShowOffcanvas}
            className="ms-auto"
          />
          {showNavLinks && ( // Only display "About" and "Sign Up" on larger screens
            <Nav className="me-auto">
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="register">Sign Up</Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="register">Sign Up</Nav.Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LandingNavBar;
