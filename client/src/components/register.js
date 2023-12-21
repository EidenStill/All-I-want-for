//  import React, { useState, useEffect } from 'react';
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "../styles/images.css";
import "../styles/authentication.css";
import React from "react";
import { Col, Form, Button, Image, Navbar } from "react-bootstrap"; // import Image and Navbar
import { FaEye, FaEyeSlash } from "react-icons/fa"; // import the eye icons
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function Register() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // This a validation schema using yup
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "8 characters or more")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match!"),
    tosCheck: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions!"),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      middle: "",
      lastname: "",

      tosCheck: false,
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });

 
  const OnSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      confirmPassword: event.target[2].value,
      firstname: event.target[3].value,
      middle: event.target[4].value,
      lastname: event.target[5].value,
      tosCheck: event.target[6].checked,
    };
    // Use Formik's validate function to validate the form values against the schema
    const isValid = validationSchema.isValidSync(formData);
    if (isValid) {
      // If data is valid, navigate to the home page and pass the form data as state
      // navigate("/home", { state: { formData } });
      formData = {
        email: event.target[0].value,
        password: event.target[1].value,
        firstname: event.target[3].value,
        middle: event.target[4].value,
        lastname: event.target[5].value,
      };
      try{
        await axios.post('http://localhost:8000/register', formData);
        navigate("/signin")
      }catch(err){
        console.log(err)
        alert(err)
      }
    } else {
      // Handle validation errors here
      alert("Form data is invalid.");
    }
  };



  const handleClick = () => {
    navigate(-1);
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="logo-image"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Navbar.Brand>
              <img src="../images/Aliwant.png" style={{ marginTop: "30px" }} />
            </Navbar.Brand>
          </div>
        </div>
        <h3>Sign-Up</h3>
        <br />

        <Form onSubmit={OnSubmit} >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            
              <Col md={7} className="m-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Floating className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="wide-form-control"
                  />
                  <Form.Text className="text-muted">
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </Form.Text>
                  <Form.Label>Email address</Form.Label>
                </Form.Floating>
              </Form.Group>

             
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Floating className="mb-3">
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  <Form.Text className="text-muted">
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.password}
                    </div>
                  ) : null}
                </Form.Text>
                <Form.Label>Password</Form.Label>
                <span className="icon" onClick={togglePasswordVisibility}>
                  {passwordShown ? <FaEyeSlash /> : <FaEye />}
                </span>
              </Form.Floating>
      
              </Form.Group>

              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Floating className="mb-3">
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Form.Text className="text-muted">
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </Form.Text>
                <Form.Label>Confirm Password</Form.Label>
                <span className="icon" onClick={togglePasswordVisibility}>
                  {passwordShown ? <FaEyeSlash /> : <FaEye />}
                </span>
              </Form.Floating>
              </Form.Group>
            </Col>
            

            <Col md={7} className="m-2">
              <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Floating className="mb-3">
            
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
              <Form.Label>First Name</Form.Label>
              </Form.Floating>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMiddleInitial">
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  name="middle"
                  value={formik.values.middle}
                  onChange={formik.handleChange}
                />
              <Form.Label>Middle Initial</Form.Label> 
              </Form.Floating>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                
                <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                <Form.Label>Last Name</Form.Label>
              </Form.Floating>
              </Form.Group>
            </Col>
          </div>
          <div className="field">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="tosCheck"
                label="I agree to the Terms and Services"
                value={formik.values.tosCheck}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=""
              />
              {formik.touched.tosCheck && formik.errors.tosCheck ? (
                <div className="error" style={{ color: "red" }}>
                  {formik.errors.tosCheck}
                </div>
              ) : null}
            </Form.Group>
          </div>
          <Button variant="primary" type="submit" className="btn-lg">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
