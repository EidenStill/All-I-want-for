import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Navbar, Row, Image } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/images.css';
import '../styles/authentication.css'

function Register() {
  const navigate = useNavigate();

  // This a validation schema using yup
  const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(8, '8 characters or more').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match!"),
    tosCheck: yup.boolean().oneOf([true], 'You must accept the terms and conditions!'),
  });

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      middle: '',
      lastname: '',
      hobbies: '',
      extra2: '',
      tosCheck: false,
    },
    validationSchema: validationSchema,
    validateOnBlur: true,
  });



  const OnSubmit = (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      confirmPassword: event.target[2].value,
      firstname: event.target[3].value,
      middle: event.target[4].value,
      lastname: event.target[5].value,
      hobbies: event.target[6].value,
      extra2: event.target[7].value,
      tosCheck: event.target[8].checked,
    };
    // Use Formik's validate function to validate the form values against the schema
    const isValid = validationSchema.isValidSync(formData);
    if (isValid) {
      // If data is valid, navigate to the home page and pass the form data as state
      navigate('/home', { state: { formData } });
    } else {
      // Handle validation errors here
      alert('Form data is invalid.');
    }
  }

  // State variable to track whether the delay is complete
  // const [delayComplete, setDelayComplete] = useState(false);

  // // Simulate a 5-second delay before showing content
  // useEffect(() => {
  //   const delayTimer = setTimeout(() => {
  //     setDelayComplete(true);
  //   }, 4000);

  //   // Clean up the timer if the component unmounts
  //   return () => clearTimeout(delayTimer);
  // }, []);

  // // Render loading skeleton during the delay
  // if (!delayComplete) {
  //   return (
  //     <header className="App-header">
  //       <Skeleton height={60} width={600} /> <br/>
  //       <div className="d-flex flex-column flex-grow-1 signup-container">
  //         <div className="d-flex flex-row">
  //           <div className="left-column" style={{marginRight: '20px', width: '60%'}}> 
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //           </div>
  //           <div className="right-column"> 
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={400} /> <br/>
  //             <Skeleton height={40} width={100} /> <br/>
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //   );
  //  }

    const handleClick = () => {
      navigate(-1);
    };
  

  return (
    <div className="d-flex flex-column flex-grow-1 signup-page">
      <Image onClick={handleClick} className='back-btn' src="../images/back1.png" alt="Back"/>
      <div className='signup-container'>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='logo-image' style={{ display: "flex", justifyContent: "center" }}>
          <Navbar.Brand>
            <img src="../images/Aliwant.png" />
          </Navbar.Brand>
        </div>
      </div>
      <h3>Sign Up</h3>
      <br />
      <Form onSubmit={OnSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '30px' }}>
          <div style={{ margin: '10px' }}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Form.Text className="text-muted" >
                {formik.touched.email && formik.errors.email ? (
                  <div className="error" style={{ color: 'red' }}>{formik.errors.email}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Form.Text className="text-muted" >
                {formik.touched.password && formik.errors.password ? (
                  <div className="error" style={{ color: 'red' }}>{formik.errors.password}</div>
                ) : null}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Form.Text className="text-muted" >
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="error" style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                ) : null}
              </Form.Text>
            </Form.Group>
          </div>


          <div style={{ margin: '10px' }}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMiddleInitial">
              <Form.Label>Middle Initial</Form.Label>
              <Form.Control type="text"
                name="middle"
                value={formik.values.middle}
                onChange={formik.handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
            </Form.Group>
          </div>
        </div>
        <div className='field'>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox"name="tosCheck" label="I agree to the Terms and Services"
              value={formik.values.tosCheck}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              className=''/>
            {formik.touched.tosCheck && formik.errors.tosCheck ? (
              <div className="error" style={{ color: 'red' }}>{formik.errors.tosCheck}</div>
            ) : null}
          </Form.Group>
        </div>
        <Button variant="primary" type="submit" className='btn-lg'>
          Submit
        </Button>

      </Form>
      </div>
    </div>
  );
}

export default Register;