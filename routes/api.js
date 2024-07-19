const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

module.exports = router;
