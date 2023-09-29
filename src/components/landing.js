import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/form.css';
import userData from '../staticdata.json';

function Home() {

  // State variable to track whether the delay is complete
  // const [delayComplete, setDelayComplete] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchDiscounts = (searchValues) => {
    console.log(searchValues);
    setSearchInput(searchValues);
    const filteredData = userData.filter((item) => {
      // Access the "product" field of the current item and convert it to lowercase
      const product = item.product.toLowerCase();
        
      // Check if the product contains the lowercase search input
      return product.includes(searchInput.toLowerCase()); 
    }) 
    console.log(filteredData); 
  }

  // After the delay, display the content
  return (
    <header className="App-header">

  <Form className="justify-content-center" style={{ width: '100%' }}>
    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Col xs="4"> {/* Changed  to xs="auto" */}
        <Form.Control
          type="text"
          placeholder="Search for discounted products!"
          className="mr-sm-2"
          style={{ width: '100%', height: '50px', flex: 1 }} 
          onChange = {(e) => searchDiscounts(e.target.value)}
        />
      </Col>
      <Col xs="auto"> {/* Changed xs="3" to xs="auto" */}
        <Button type="submit" className="btn-lg">
          Search
        </Button>
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
