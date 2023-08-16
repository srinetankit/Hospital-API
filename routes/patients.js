// Importing necessary modules for setting up routes, authentication, and controllers
const express = require('express');
const router = express.Router();
const patient = require('../controllers/patientController')
const passport = require('passport');

// Route for patient registration, requires JWT authentication
router.post('/register', passport.authenticate('jwt', { session: false }), patient.register)

// Route for creating a report for a specific patient
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patient.createReport)

// Route for retrieving all reports for a specific patient
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patient.patientReports)

module.exports = router;