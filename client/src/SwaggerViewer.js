import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
//import swaggerDocument from "../src/swagger.json";
import swaggerDocument from "./swagger.json";

const SwaggerViewer = () => {
const swaggerUrl = '../src/swagger.json'; // Replace with your Swagger documentation URL
//<SwaggerUI url={swaggerUrl}/>
  return (
    <div>    
      <SwaggerUI spec={swaggerDocument} />
      
    </div>
  );
};

export default SwaggerViewer;
