const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8080;
const apiRoutes = require('./routes/api'); 

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'))

const { authenticateToken } = require('./auth.js');


// sendFile will go here
app.use('/api', apiRoutes);
app.get('/validation', authenticateToken, function (req, res) {
  res.sendFile(path.join(__dirname, '/html/manage.html'));
});
app.get('/active', authenticateToken, function (req, res) {
  res.sendFile(path.join(__dirname, '/html/active.html'));
});
app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '/html/login.html'));
});
app.get('/generate', function (req, res) {
  res.sendFile(path.join(__dirname, '/html/generator.html'));
});

// db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
// });