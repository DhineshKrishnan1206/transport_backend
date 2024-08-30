const express = require('express');
const router = express.Router();
const formController = require('../controllers/forms');

// POST endpoint to submit form data
router.post('/submit', formController.submitForm);

// GET endpoint to retrieve all form entries
router.get('/entries', formController.getAllEntries);

// GET endpoint to retrieve a single form entry by ID
router.get('/entries/:id', formController.getEntryById);

module.exports = router;
