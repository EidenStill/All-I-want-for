const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Aliwant',
    description: 'Description'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./App.js'];

swaggerAutogen(outputFile, routes, doc);