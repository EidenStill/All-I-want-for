import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/footer.css'
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary footer" >
      <Container>
        <Navbar.Brand >Footer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
          <div>© 2023 Copyright: First React | Ronan Jasper G. Reponte</div>
          <Nav className="mx-auto">
            <Nav.Link href="">Social Media</Nav.Link>
            <Nav.Link href="">Email</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;