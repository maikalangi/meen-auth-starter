// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// New (registration page)
router.get('/new', (req, res) => {
	res.render('users/new.ejs');
});

// Create (registration route)
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser)=>{
        res.redirect('/');
    });
});

// Export Router
module.exports = router;