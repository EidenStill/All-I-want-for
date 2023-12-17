import Container from "react-bootstrap/Container";
import "../styles/navbar.css";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';

function NavBar() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [isLoading, setIsLoading] = useState(true);

 const handleLogin = () => {
 setIsLoggedIn(true);
 };

 const handleLogout = () => {
 setIsLoggedIn(false);
 };

 // Simulate loading delay
 setTimeout(() => {
 setIsLoading(false);
 }, 2000);

 return (
 <Navbar expand="lg" className="bg-body-tertiary" >
   <Container>
     <Navbar.Brand href="/">
       {isLoading ? <Skeleton width={30} height={30} /> : <img
         src="/images/Logo.png"
         width="30"
         height="30"
         className="d-inline-block align-top"
         alt="React Bootstrap logo"
       />}
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

       <Nav className="me-auto">
         {isLoading ? (
           <>
             <Skeleton width={30} height={30}/>
             <Skeleton style={{ marginLeft: 10 }} width={30} height={30} />
           </>
         ) : (
           <>
             <Nav.Link href="home">Home</Nav.Link>
             <Nav.Link href="about">About</Nav.Link>
           </>
         )}
       </Nav>
       {isLoggedIn ? (
         <NavDropdown
           title={
             <span>
              <FaUser className="profile-icon" size={40} color="grey" />
              <span className="user-name">User Name</span>
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
         isLoading ? <Skeleton  width={40} height={30}/> : 
         <Nav.Link href="signin" className="btn btn-outline-success sign-in-link" onClick={handleLogin}>
          Sign In
         </Nav.Link>
       )}
     </Navbar.Collapse>
   </Container>
 </Navbar>
 );
}

export default NavBar;
