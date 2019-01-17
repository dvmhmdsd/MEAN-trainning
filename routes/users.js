const router = require('express').Router();

// register
router.get('/register', (req, res) => {
    res.send('register');
});

// auth
router.get('/auth', (req, res) => {
    res.send('auth');
});

// profile
router.get('/profile', (req, res) => {
    res.send('profile');
});

// validate
router.get('/validate', (req, res) => {
    res.send('valid');
});

module.exports = router;