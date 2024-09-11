const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { sequelize, models } = require('../databaseconect.js');
require('dotenv').config();
const { authenticateToken } = require('./../auth.js');
const { where } = require('sequelize');

const SECRET_KEY = process.env.SECRET_KEY;

router.get('/users', async (req, res) => {
    const users = await models.users.findAll();
    res.json(users);
  });

  router.get('/get-tikets', async (req, res) => {
    const users = await models.tikets.findAll();
    res.json(users);
  });

  async function updateTicket(ticketId, newStatus, validationDate) {
    try {
        // Validate input
        if (!ticketId || !newStatus) {
            throw new Error('Ticket ID and status are required.');
        }

        // Perform the update
        const [updated] = await models.tikets.update(
            {
                status: newStatus,
                validation_date: sequelize.fn('NOW')
            },
            {
                where: { qr_code: ticketId },
                returning: true // If you want to return the updated instance
            }
        );

        if (updated) {
            console.log('Ticket updated successfully.');
        } else {
            console.log('Ticket not found.');
        }
    } catch (error) {
        console.error('Error updating ticket:', error);
    }
}

  router.post('/validate-tiket', async (req, res) => {
    const { qr_code } = req.body;


    // Process the data (e.g., validate the ticket)
    console.log(`QR Code: ${qr_code}`);
    const tiket = await models.tikets.findOne({where: {qr_code: qr_code}});
    if(tiket.status == 'generated') {
      updateTicket(qr_code, 'validated');
      res.json("validated");

    }
    else {
      res.json("expired");

    }
    
  });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    // For demonstration, any username/password will work. Replace with real authentication.
    if (email && password) {
        const user = { email }; // Simplified user object
        const userdb = await models.users.findOne({ where: { email: email, password_not_hashed: password } });
        if(userdb) {
                  const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });

                
                  await models.login.create({
                    date: sequelize.fn('NOW'), // Inserts current timestamp
                    token: token,
                    is_active: 1
                });
                  

                  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // 1 hour
                  res.redirect('/validation'); // Redirect to a protected page
        } else {
          res.redirect('/login?error=1');
        }



        
    } else {
      res.redirect('/login?error=1');
        // res.status(400).json({ message: 'Username and password required' });
    }
});

// routes/api.js
router.get('/user-main-data', (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });

      // Send user data or protected content
      res.json({ message: 'This is protected data', user });
  });
});

  
router.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

router.get('/logout', (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  res.redirect('/login'); // Redirect to login page
});

module.exports = router;
