import React from "react";
import { Row, Col, Form, Button, Image, Navbar } from "react-bootstrap"; // import Image and Navbar
import { FaEye, FaEyeSlash } from "react-icons/fa"; // import the eye icons
import "../styles/authentication.css"; // import the CSS file
import { useNavigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MDBBtn } from "mdb-react-ui-kit";

function SignInPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="d-flex flex-column flex-grow-1 signup-page">
      <Image
        onClick={handleClick}
        className="back-btn"
        src="../images/back1.png"
        alt="Back"
      />
      <div className="signup-container">
        <div
          className="logo-image"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Navbar.Brand style={{ marginTop: "20px" }}>
            <img src="../images/Aliwant.png" />
          </Navbar.Brand>
        </div>
        <br />
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <Row>
              <h2>Sign In</h2>
              <Form>
                <Form.Floating className="mb-3">
                  <Form.Control type="email" placeholder=" " />
                  <Form.Label>Email address</Form.Label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder=" "
                  />
                  <Form.Label>Password</Form.Label>
                  <span className="icon" onClick={togglePasswordVisibility}>
                    {passwordShown ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </Form.Floating>

                <Button variant="primary" type="submit" size="lg" className="sign-in-btn">
 Sign In
</Button>
              </Form>
              <br />
              <p>
                Don't have an account? <a href="/register">Sign Up</a>
              </p>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="#"
              >
                <FaGoogle size="4em" />
              </MDBBtn>
              <MDBBtn
                className="m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="#"
              >
                <FaFacebookF size="4em" />
              </MDBBtn>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignInPage;
