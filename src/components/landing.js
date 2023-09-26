import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Home() {

  // State variable to track whether the delay is complete
  const [delayComplete, setDelayComplete] = useState(false);

  // Simulate a 5-second delay before showing content
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayComplete(true);
    }, 5000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(delayTimer);
  }, []);

  // Render loading skeleton during the delay
  if (!delayComplete) {
    return (
      <header className="App-header">
        <Skeleton height={300} width={300} circle={true} />
        <Skeleton height={30} width={500} />
        <Skeleton height={30} width={300} />
        <Skeleton height={30} width={300} />
      </header>
    );
  }

  // After the delay, display the content
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>CREATE YOUR OWN WISHLIST!</h1>
      <Form className='justify-content-end'>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search for discounted products!"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
                <Button type="submit">Search</Button>
            </Col>
            </Row>
        </Form>
    </header>
  );
}

export default Home;
