// Importing the required module 'express' for creating and managing routes
const express = require('express');

const router = express.Router();

const doctor = require('../controllers/doctorController')

// Route for handling doctor registration
router.post('/register', doctor.create)

// Route for handling doctor login
router.post('/login', doctor.createSession)

module.exports = router;