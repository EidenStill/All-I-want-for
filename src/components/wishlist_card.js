import React from 'react';
import '../styles/card.css';
//import userData from '../data/user_data';
import userData from '../staticdata.json';
function Card() {
  return ( 
    <div className="card-container">
        {userData.map((item) => (
            <div className='card'>
                <img src={item.image} alt={item.product} className='card-img' />                    
                    <div key={item.id}>
                        <h4>{item.product}</h4>
                        <p>{item.content}</p>
                    </div>
            </div>
        ))}   
      </div> 
  );
}

export default Card;