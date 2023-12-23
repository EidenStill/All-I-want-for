import React from "react";
import axios from "axios";
import { Row, Col, Form, Button, Image, Navbar } from "react-bootstrap"; // import Image and Navbar
import { FaEye, FaEyeSlash } from "react-icons/fa"; // import the eye icons
import "../styles/authentication.css"; // import the CSS file
import { useNavigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";

function SignInPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const [passwordShown, setPasswordShown] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [additem, setWish] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const OnSubmit = async (event) => {
    event.preventDefault()
    let formData = {
      item: event.target[0].value
    }
    console.log(formData)
    try{
      const response = await axios.post('http://localhost:8000/addwish', formData);
      if (response.data.success) {
        navigate('/wishlist');
      } else {
        setErrorMessage(response.data);
      }
    }catch(err){
      console.log(err)
      alert(err)
    }
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="justify-content-center">
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
              <h2>What is your wish?</h2>
              <Form onSubmit={OnSubmit}>
                <Form.Floating className="mb-3">
                  <Form.Control type="text" placeholder=" " />
                  <Form.Label>Add Item</Form.Label>
                </Form.Floating>
                <Button variant="primary" type="submit" size="lg" className="sign-in-btn">
                  Add Item
                </Button>
              </Form>
              <br />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignInPage;
