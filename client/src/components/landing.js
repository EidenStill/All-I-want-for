import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import logo from '../logo.svg';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Navbar, Row } from 'react-bootstrap';
import '../styles/form.css';
import '../styles/images.css';
import '../styles/App.css';

import { fetchsales } from '../queryData';
import { useNavigate  } from "react-router-dom";


function Home() {
 const [isLoading, setIsLoading] = useState(true);
 const navigate = useNavigate();
 // State variable to track whether the delay is complete
 // const [delayComplete, setDelayComplete] = useState(false);
 const [searchInput, setSearchInput] = useState('');
 const [filteredResults, setFilteredResults] = useState([]);

 useEffect(() => {
   setTimeout(() => {
     setIsLoading(false);
   }, 2000);
 }, []);

 const searchDiscounts = (searchValues) => {
//    console.log(searchValues);
//    setSearchInput(searchValues);
//    const filteredData = userData.filter((item) => {
// // Access the "product" field of the current item and convert it to lowercase
//      const product = item.product.toLowerCase();

//       // Check if the product contains the lowercase search input
//      return product.includes(searchInput.toLowerCase()); 
//    }) 
//    console.log(filteredData); 
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
           {isLoading ? <Skeleton width={400} height={100} /> : <img src="../images/Aliwant.png" />}
         </Navbar.Brand>
       </div>
     </div>
     <Form className="justify-content-center" style={{ width: '80%' }}>
       <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <Col xs="5">
         {isLoading ? <Skeleton width={500} height={50} /> :
           <Form.Control
             type="text"
             placeholder="Search for discounted products!"
             className="mr-sm-2"
             style={{ width: '100%', height: '50px', flex: 1 }} 
             onChange = {(e) => searchDiscounts(e.target.value)}
           /> }
         </Col>
         <Col xs="auto">
         {isLoading ? <Skeleton style={{ marginLeft: 30 }}  width={70} height={40} /> :
           <Button type="submit" className="btn-lg">
            "Search"
           </Button>}
         </Col>
       </Row>
     </Form>
     <div>
       <br/>
       {isLoading ? <Skeleton count={1} /> : <h1>Creat Your Own Shopping Wishlist!</h1>}
       {isLoading ? <Skeleton count={1} /> : <p>Add items to your Wishlist and be notified of any discounts!</p>}
       <div className='landbod'>
         
           <div className="design-image">
             {isLoading ? <Skeleton width={50} height={50} /> : <img src={'/images/6.png'} alt="Design 2" className="side-image" />}
           </div>
           <Col className="centered-col">
             <div className="image-container">
               {isLoading ? <Skeleton width={50} height={50} /> : <img src={'/images/basket.png'} className="App-logo" alt="logo" />}
               <p>{isLoading ? <Skeleton width={50} height={20} /> : "ADD"}</p>
             </div>
           </Col>
           <Col className="centered-col">
             <div className="image-container">
               {isLoading ? <Skeleton width={50} height={50} /> : <img src={'/images/search.png'} className="App-logo" alt="logo" />}
               <p>{isLoading ? <Skeleton width={50} height={20} /> : "DISCOVER"}</p>
             </div>
           </Col>
           <Col className="centered-col">
             <div className="image-container">
               {isLoading ? <Skeleton width={50} height={50} /> : <img src={'/images/notif.png'} className="App-logo" alt="logo" />}
               <p>{isLoading ? <Skeleton width={50} height={20} /> : "UPDATED"}</p>
             </div>
           </Col>
           <div className="design-image">
             {isLoading ? <Skeleton width={50} height={50} /> : <img src={'/images/3.png'} alt="Design 3" className="side-image" />}
           </div> 
         
       </div>
       {isLoading ? <Skeleton width={200} height={50} />:
       <Button href='/register' className="btn-lg">
       "CREATE YOUR WISHLIST NOW!"
       </Button> }
     </div>
   </header>
 );
}

export default Home;
