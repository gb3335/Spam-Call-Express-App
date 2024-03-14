const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

// User registration route
router.post('/register', userController.register);

// User login route
router.post('/login', userController.login);

// User profile route, requires authentication
router.get('/profile', auth, userController.viewProfile);

// User profile update route, requires authentication
router.put('/profile', auth, userController.updateProfile);

module.exports = router;