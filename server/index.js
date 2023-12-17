import express from "express"
import bodyParser from "body-parser"
import mysql from "mysql"
// import db from "db.js"
import cors from "cors"
// const bodyParser = require('body-parser');
// const db = require('./db'); // Import the db module
// const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 8000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "aliwant"
})
app.use(bodyParser.json());
app.use(express.json())
app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/register', async (req, res) => {
    // Handle registration logic
    try {
        const q = "INSERT INTO users (user_email, user_password, user_fname, user_middle, user_lname) VALUES (?)"
        const values = [
            req.body.email,
            req.body.password,
            req.body.firstname,
            req.body.middle,
            req.body.lastname,
        ];
        console.log(values)
        // Insert the data into the database
        db.query(q, [values], (err, data) => {
            if (err) {
                console.error('Error during registration:', err);
                return res.status(500).json(err);
            }
            return res.json("Successful Registration");
        })

    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {
    // Handle login logic
    try {
        const q = "SELECT * FROM users WHERE user_email = ? AND user_password = ?";
        const values = [req.body.email, req.body.password];

        // Execute the SELECT query
        db.query(q, values, (err, data) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json(err);
            }

            // Check if any matching user was found
            if (data.length > 0) {
                // User authenticated successfully
                const user = data[0]; // Assuming there is only one matching user
                return res.json({
                    message: 'Login successful',
                    fname: user.user_fname,
                    lname: user.user_lname,
                });
            } else {
                // No matching user found
                return res.status(401).json({ message: 'Invalid email or password' });
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
