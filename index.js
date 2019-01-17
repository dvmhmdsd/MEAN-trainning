const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();

const users = require('./routes/users');

app.get('/', (req, res) => {
    res.send('Hi !')
});

// set assets
app.use(express.static(path.join(__dirname, 'client')));

// allow origin
app.use(cors());

// body parser
app.use(bodyParser.json());

// users route
app.use('/users', users);

// instead of cors
/* app.use((req, res, next) => {
    res.header('accerss-control-allow-origin', "*");
    res.header('Access-control-allow-headers', "Origin, x-Requested-with, Content-Type, Accept");
    next();
}); */

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
