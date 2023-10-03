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
    setSearchInput(searchValues);
    const filteredData = userData.filter((item) => {
      // Access the "product" field of the current item and convert it to lowercase
      const product = item.product.toLowerCase();
        
      // Check if the product contains the lowercase search input
      return product.includes(searchInput.toLowerCase()); 
    })
    setFilteredResults(filteredData); 
  }
  

  return ( 
    <div className='mylist-container'>
      <Form className='justify-content-center' style={{padding:'20px 40px 20px', borderBottomColor:'black'}}>
            <Row>
            <Col xs="auto">
                <Form.Control
                icon='search'
                type="textitem"
                placeholder="Search..."
                className=" mr-sm-2"
                onChange = {(e) => searchItems(e.target.value)}
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
                            <div className='text-container' key={item.id}>                  
                            <h4 className='textitem'>
                              {item.product}
                            </h4>
                            </div>
                        </div> 
                      );
                    })
                    ) : (
                      userData.map((item) => (
                        <div className='card'>
                            <img src={item.image} alt={item.product} className='card-img' />                    
                            <div className='text-container' key={item.id}>
                            <h6 className='textitem'>{item.product}</h6>
                              <div className='text-container'>                
                                  <p className='textitem'>{item.source}</p>
                                  <p className='textitem'>{item.expiry}</p>
                              </div>
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