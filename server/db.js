const initOptions = {
    // Use a custom promise library to avoid conflict with React's promise library
    promiseLib: Promise,
  };
  
  const pgp = require('pg-promise')(initOptions);
  
  // Update the connection string based on your PostgreSQL database setup
  const connectionString = 'postgres://postgres:superuser@localhost:5432/aliwant';
  
  const db = pgp(connectionString);
  
  module.exports = db;