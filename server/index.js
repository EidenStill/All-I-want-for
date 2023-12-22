import express from "express"
import nodemailer from "nodemailer"
import bodyParser from "body-parser"
import mysql from "mysql"
import { spawn } from "child_process"
// const session = require("express-session");
import session from "express-session"
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
    password: "",
    database: "aliwant"
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aliwant54@gmail.com',
      pass: 'rgcw pzel inwo qlmy',
    },
  });

function runPythonScript() {
    const pythonScript = "python";
    const scriptArgs = ["scrape.py"];
    const scraped_data = [];
    const pythonProcess = spawn(pythonScript, scriptArgs);
  
    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python script output: ${data}`);
    });
  
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python script error: ${data}`);
    });
  
    pythonProcess.on("close", (code) => {
      if (code === 0) {
        console.log("Python script execution successful");
      } else {
        console.error(`Python script execution failed with code ${code}`);
      }
    });
  
    pythonProcess.on("error", (error) => {
      console.error(`Error executing Python script: ${error.message}`);
    });
  }

  function formatToMonthDayYear(dateTimeString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const dateObj = new Date(dateTimeString);
    return dateObj.toLocaleDateString("en-US", options);
  }

function checkLists() {
    const q = "SELECT * FROM `wishlists`";
    db.query(q, async (err, data) => {
        if (err) {
            console.error('Error during querying:', err);
            return res.status(500).json(err);
        }
        const wishlist = data.map((item) => ({
            id: item.wishlist_id,
            item: item.item_name,
            user: item.user_id,
          }));
        // For loop to get every wishlist
        wishlist.forEach((wishlist) => {
            const value = ['%'+wishlist.item+'%'];
            const que = "SELECT * FROM `sales` WHERE item_name LIKE ?";
            db.query(que, value, async (err, data) => {
                if (err) {
                    console.error('Error during query:', err);
                    return res.status(500).json(err);
                }
                if (data.length > 0) {
                    console.log("WHAT =     ", data)
                    const notifs = data.slice(0, 2)// I want this to only be upto the second one at max
                    const details = await notifs.map((item) => ({
                        id: item.sale_id,
                        source: item.sale_source,
                        product: item.item_name,
                        price: item.item_price,
                        image: item.item_img,
                        expiry: formatToMonthDayYear(item.sale_expiration),
                        discount: item.discount_value,
                        original: item.original_price
                    }));
                    const query = "SELECT user_email FROM `users` WHERE user_id = ?"
                    const email = wishlist.user
                    db.query(query, email, async (err, data) => {
                        if (err) {
                            console.error('Error during query:', err);
                            return res.status(500).json(err);
                        }
                        // Ensure that the database query has completed before calling sendNotification
                        sendNotification({ userEmail: data[0].user_email, itemDetails: details });
                    })
                }
            })
        }); 
    })
}

const sendNotification = async ({ userEmail, itemDetails }) => {
    console.log("THIS =    ", itemDetails)
    try {
      const mailOptions = {
        from: 'aliwant54@gmail.com',
        to: userEmail,
        subject: 'Your Wishlist Item is on Sale!',
        html: `
          <h1>Your Wishlist Item is on Sale!</h1>
            ${itemDetails.map(item => `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                <h2>${item.product}</h2>
                <img src="${item.image}" alt="${item.product}" style="width: 150px; height: auto;">
                <p>Price: ${item.price}</p>
                <p>Original Price: ${item.original}</p>
                <p>Discount: ${item.discount}%</p>
                <p>Sale Expires: ${item.expiry}</p>
                <p>Sale Source: ${item.source}</p>
            </div>
            `).join('')}
        `,
      };
  
      // Use the transporter created outside the function
      await transporter.sendMail(mailOptions);
      console.log('Notification sent successfully!');
    } catch (error) {
      console.error('Error sending notification', error);
    }
  };

app.use(bodyParser.json());
app.use(express.json())
app.use(cors()); // Enable CORS for all routes
app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );

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
        res.status(500).send(error.sqlMessage);
    }
});

app.post('/login', async (req, res) => {
    // Handle login logic
    try {
        const q = "SELECT * FROM users WHERE user_email = ? AND user_password = ?";
        const values = [req.body.email, req.body.password];
        console.log(req.body)
        // Execute the SELECT query
        db.query(q, values, (err, data) => {
            if (err) {
                console.error('Error during login:', err);
                return res.status(500).json(err);
            }
            console.log(data)
            // Check if any matching user was found
            if (data.length > 0) {
                // User authenticated successfully
                const user = data[0]; // Assuming there is only one matching user
                console.log(user)
                req.session.user_email = user.user_email
                req.session.user_fname = user.user_fname
                req.session.user_lname = user.user_lname
                return res.json({
                    success: true,
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

app.get('/search', (req, res) => {
    const value = ['%'+req.query.q+'%'];
    const que = "SELECT discount_id, item_name, item_img, discount_source, discount_description, discount_code, discount_value, discount_expiration, discount_url FROM discounts JOIN items ON discounts.item_id = items.item_id WHERE items.item_name LIKE ? ";

    // Execute the SELECT query
    db.query(que, value, (err, data) => {
        if (err) {
            console.error('Error during search:', err);
            return res.status(500).json(err);
        }
        
        // Check if any matching item was found
        if (data.length > 0) {

            return res.json({
                data
                // discount_id : data.discount_id,
                // item_name : data.item_name,
                // item_img : data.item_img,
                // discount_source : data.discount_source,
                // discount_description : data.discount_description,
                // discount_code : data.discount_code,
                // discount_value : data.discount_value,
                // discount_expiration : data.discount_expiration,
                // discount_url : data.discount_url,
            });
        } else {
            // No matching user found
            return res.json({ message: 'No matching items found' });
        }

    });
});

app.get("/getsales", (req, res) => {
    let q = "SELECT * FROM sales WHERE sale_expiration >= CURDATE()";

    db.query(q, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      const formattedSales = data.map((item) => ({
        id: item.sale_id,
        source: item.sale_source,
        product: item.item_name,
        price: item.item_price,
        image: item.item_img,
        expiry: formatToMonthDayYear(item.sale_expiration),
        discount: item.discount_value,
        original: item.original_price
        // date: formatToMonthDayYear(item.date),
        // time: formatToTimeAMPM(item.time),
      }));
      return res.json(formattedSales);
    });
});
  

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        // runPythonScript();
        checkLists();
    });
