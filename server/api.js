const express = require('express');
const router = express.Router();
const db = require('./db'); // Import the db module

router.post('/api/register', async (req, res) => {
    try {
        const { email, password, firstname, middle, lastname } = req.body;
    
        // Insert the data into the database
        const result = await db.query(
          'INSERT INTO users (user_email, user_password, user_fname, user_mname, user_lname) VALUES ($email, $password, $firstname, $middle, $lastname) RETURNING *',
          [email, password, firstname, middle, lastname]
        );
    
        res.json(result.rows[0]);
      } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal Server Error');
      }
});

module.exports = router;