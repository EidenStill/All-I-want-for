import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Navbar, Row, Image } from 'react-bootstrap';
import '../styles/form.css';
import '../styles/images.css';
import userData from '../staticdata.json';
import { useNavigate ,  useLocation } from "react-router-dom";
import "../styles/App.css"

function Home() {
  const navigate = useNavigate();
  // State variable to track whether the delay is complete
  // const [delayComplete, setDelayComplete] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchPage = async (event) => {
    event.preventDefault();
    // try{
    //   await axios.post('http://localhost:8000/search', event.target.value);
    //   navigate("/sear")
    // }catch(err){
    //   console.log(err)
    // }
    navigate(`/search-results?q=${searchInput}`);
  }


  // After the delay, display the content
  return (
    <header className="App-header">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='logo-image' style={{ display: "flex", justifyContent: "center" }}>
          <Navbar.Brand>
            <img src="../images/Aliwant.png" />
          </Navbar.Brand>
        </div>
      </div>
      <Form className="justify-content-center" style={{ width: '80%' }} onSubmit={searchPage}>
        <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Col xs="5"> {/* Changed  to xs="auto" */}
            <Form.Control
              type="text"
              placeholder="Search for discounted products!"
              className="mr-sm-2"
              style={{ width: '100%', height: '50px', flex: 1 }}
              onChange={(e) => searchDiscounts(e.target.value)}
            />
          </Col>
          <Col xs="auto"> {/* Changed xs="3" to xs="auto" */}
            <Button type="submit" className="btn-lg">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <div>

        <br />
        <h1>Creat Your Own Shopping Wishlist!</h1>
        <p>Add items to your Wishlist and be notified of any discounts!</p>

        <div className='landbod'>

            <div className="design-image">
              <img src={'/images/6.png'} alt="Design 2" className="side-image" />
            </div>

            <Col className="centered-col">
              <div className="image-container">
                <img src={'/images/basket.png'} className="App-logo" alt="logo" />
                <p>ADD</p>
              </div>
            </Col>
            <Col className="centered-col">
              <div className="image-container">
                <img src={'/images/search.png'} className="App-logo" alt="logo" />
                <p>DISCOVER</p>
              </div>
            </Col>
            <Col className="centered-col">
              <div className="image-container">
                <img src={'/images/notif.png'} className="App-logo" alt="logo" />
                <p>UPDATED</p>
              </div>
            </Col>
            <div className="design-image">
              <img src={'/images/3.png'} alt="Design 3" className="side-image" />
            </div>

        </div>
        <Button href='/register' className="btn-lg">CREATE YOUR WISHLIST NOW!</Button>

      </div>
    </header>


  );
}

export default Home;
