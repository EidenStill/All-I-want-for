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
  // const [delayComplete, setDelayComplete] = useState(false);

  // // Simulate a 5-second delay before showing content
  // useEffect(() => {
  //   const delayTimer = setTimeout(() => {
  //     setDelayComplete(true);
  //   }, 5000);

  //   // Clean up the timer if the component unmounts
  //   return () => clearTimeout(delayTimer);
  // }, []);

  // Render loading skeleton during the delay
  // if (!delayComplete) {
  //   return (
  //     <header className="App-header">
  //       <Skeleton height={300} width={300} circle={true} />
  //       <Skeleton height={30} width={500} />
  //       <Skeleton height={30} width={300} />
  //       <Skeleton height={30} width={300} />
  //     </header>
  //   );
  // }

  // After the delay, display the content
  return (
    <header className="App-header">
     <Form className='justify-content-end'>
  <Row>
    <Col xs="8">
      <Form.Control
        type="text"
        placeholder="Search for discounted products!"
        className="mr-sm-2"
        style={{ width: '100%', height: '50px' }}
      />
    </Col>
    <Col xs="4">
      <Button type="submit" className="btn-lg">Search</Button> {/* Added btn-lg class for larger button */}
    </Col>
  </Row>
</Form>


        <br/>
      <h1>Creat Your Own Shopping Wishlist!</h1>
      <p>Add items to your Wishlist and be notified of any discounts!</p>
      <Row>
      <Col>
      <img src={'/images/add.png'} className="App-logo" alt="logo" />
      <p>ADD</p>
      </Col>
      <Col>
      <img src={'/images/discover.png'} className="App-logo" alt="logo" />
      <p>DISCOVER</p>
      </Col>
      <Col>
      <img src={'/images/updated.png'} className="App-logo" alt="logo" />
      <p>UPDATED</p>
      </Col>
      </Row>
      
        <Button href='/register'>CREATE YOUR WISHLIST NOW!</Button>
    </header>
  );
}

export default Home;
