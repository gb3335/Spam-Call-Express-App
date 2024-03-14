const express = require('express');
const spamController = require('../controllers/spamController');
const auth = require('../middleware/auth');

const router = express.Router();

// Route to mark a number as spam
router.post('/markAsSpam', auth, spamController.markAsSpam);

// Route to search the global database by name
router.get('/searchByName/:name', auth, spamController.searchByName);

// Route to search the global database by phone number
router.get('/searchByNumber/:phoneNumber', auth, spamController.searchByNumber);

module.exports = router;