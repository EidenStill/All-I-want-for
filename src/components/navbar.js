import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img
              src="/images/Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        <Form className='justify-content-end'>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit">Submit</Button>
            </Col>
            </Row>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;