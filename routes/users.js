const router = require('express').Router();
const User = require('../models/user');

// register
router.post('/register', (req, res) => {
    let {name, email, username, password} = req.body;
    let newUser = new User({
        name,
        email,
        username,
        password
    });
    
    User.addUser(newUser, (err, user) => {
        if(err) res.json({success: false, msg: 'failed to register user'});
        res.json({success: true, msg: 'successed to register user'});
    })
});

// auth
router.get('/auth', (req, res) => {
    res.send('auth');
});

// profile
router.get('/profile', (req, res) => {
    res.send('profile');
});

module.exports = router;