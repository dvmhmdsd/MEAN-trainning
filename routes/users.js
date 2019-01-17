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
router.get('/auth', (req, res, next) => {
    const {email, password} = req.body;

    User.gerByUsername(email, (err, user) => {
        if (err) throw err;

        if(!user) {
            return res.json({success: false, msg: 'User not found'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;

            if(isMatch) {
                const token = jwt.sign(user, config.user, {
                    expiresIn: 60400 // 1 week
                });

                res.json({
                    success: true,
                    token: `JWT ${token}`,
                    user: {
                        name: user.name,
                        email: user.email,
                        username: user.username
                    }
                });
            }
        })
    })
});

// profile
router.get('/profile', (req, res) => {
    res.send('profile');
});

module.exports = router;