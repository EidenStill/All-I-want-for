import React from 'react';
import '../styles/card.css';
//import userData from '../data/user_data';
import userData from '../staticdata.json';
function Card() {
  return ( 
    <div className="card-container">
        {userData.map((item) => (
            <div className='card'>
                <div className="card-body">
                    <img src="" alt="Card" />
                    <div key={item.id}>
                        <h4>{item.product}</h4>
                        <p>{item.content}</p>
                    </div>
                </div>
            </div>
        ))}   
      </div> 
  );
}

export default Card;