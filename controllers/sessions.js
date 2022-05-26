// Dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user.js');

// New (login page)

// Delete (logout route)

// Create (login route)
router.post('/', (req, res)=>{
    // check for existing user
    User.findOne({
        email: req.body.email
    }, (error, foundUser)=>{
        // send error if no user found
        if (!foundUser) {
            res.send(`Oops! No user with that email address has been registered.`);
        } else {
            // if user found compared given password with the stored hash password
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);
            // if passwords match
            if (passwordMatches) {
                // add user to session
                req.session.currentUser = foundUser;
                // redirect back to home page
                res.redirect('/');
            } else {
                // if passwords don't match
                res.send('Oops! Invalid credentials');
            }
        }
    });
});

// Export Sessions Router
module.exports = router;