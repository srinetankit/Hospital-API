// Importing the express library to create the server
const express = require('express');
const app = express();

// The port on which the server will run
const port = 8000;

// Importing the mongoose connection configuration
const db = require('./config/mongoose')

// Importing passport and passport-jwt strategy for authentication
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy')


app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());

// Use express router
app.use('/', require('./routes/index'))

app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port : ${port}`);
})