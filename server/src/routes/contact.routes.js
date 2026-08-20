const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contact.controller');
const { contactValidation } = require('../middleware/validate');

// POST /api/contact — Submit contact form
router.post('/', contactValidation, submitContact);

module.exports = router;
