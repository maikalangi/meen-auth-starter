// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// New (registration page)

// Create (registration route)
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
});

// Export Router
module.exports = router;