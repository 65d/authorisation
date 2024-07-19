const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('public'))
// sendFile will go here
app.use('/api', apiRoutes);
app.get('/validation', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/manage.html'));
});
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/login.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);