import React,  { useState, useEffect }  from 'react';
import '../styles/card.css';
import Form from 'react-bootstrap/Form';
import {Col, Row, Button} from 'react-bootstrap';

//import userData from '../data/user_data';
import userData from '../staticdata.json';
function Card() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const searchItems = (searchValues) => {
    console.log(searchValues);
    setSearchInput(searchValues)
    const filteredData = userData.filter((item) => {
      // Access the "product" field of the current item and convert it to lowercase
      const product = item.product.toLowerCase();
        
      // Check if the product contains the lowercase search input
      return product.includes(searchInput.toLowerCase()); 
    })
    console.log(filteredData); 
    setFilteredResults(filteredData);
  }
  

  return ( 
    <div>
    <Form className='justify-content-end home'>
            <Row>
            <Col xs="auto">
                <Form.Control
                icon='search'
                type="text"
                placeholder="Search..."
                className=" mr-sm-2"
                onChange={(e) => searchItems(e.target.value)}
                />
            </Col>
            </Row>
            </Form>
        <div className="card-container">
        {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                      return (
                        <div className='card'>
                            <img src={item.image} alt={item.product} className='card-img' />                    
                                <div key={item.id}>
                                    <h4 className='text-wrap'>{item.product}</h4>
                                </div>
                                <div >
                                    <p className='text-wrap'>{item.content}</p>
                                </div>
                                <div >
                                    <h5 className='text-wrap'>{item.discount}</h5>
                                </div>
                                <div >
                                    <h5 className='text-wrap'>{item.expiry}</h5>
                                </div>
                        </div> 
                      );
                    })
                    ) : (
                      userData.map((item) => (
                        <div className='card'>
                            <img src={item.image} alt={item.product} className='card-img' />                    
                            <div key={item.id}>
                                    <h4 className='text-wrap'>{item.product}</h4>
                                </div>
                                <div >
                                    <p className='text-wrap'>{item.content}</p>
                                </div>
                                <div >
                                    <h5 className='text-wrap'>{item.discount}</h5>
                                </div>
                                <div >
                                    <h5 className='text-wrap'>{item.expiry}</h5>
                                </div>
                                
                        </div>              
                    ))  
                      
                    )
        }
        
      </div> 
      </div>
  );
}

export default Card;