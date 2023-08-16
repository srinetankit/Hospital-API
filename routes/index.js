// Importing the necessary modules for setting up routes, authentication, and controllers
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Importing the status controller module to handle status related actions
const status = require('../controllers/status')

router.use('/doctors', require('./doctors'))
router.use('/patients', require('./patients'))

// Defining a route to get filtered reports by status.
router.get('/reports/:status', passport.authenticate('jwt', { session: false }), status.filteredReports)


module.exports = router;