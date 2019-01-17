const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('User', userSchema);

module.exports.getById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getByUsername = (username, callback) => {
    User.findOne({username}, callback);
}

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}