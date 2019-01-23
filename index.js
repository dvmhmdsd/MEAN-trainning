const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config/config');

const app = express();

// connect to mongo
mongoose.connect(config.DB, { useNewUrlParser: true });

const db = mongoose.connection;

// on connect
db.on('connected', () => {
    console.log('connected');
});

// on error
db.on('error', () => {
    console.log(error);
});

const users = require('./routes/users');

app.get('/', (req, res) => {
    res.send('Hi !')
});

// set assets
app.use(express.static(path.join(__dirname, 'public')));

// allow origin
app.use(cors());

// body parser
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

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
