// user-service/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { login, logout } = require('../controllers/userController');

// User login
router.post('/users/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], login);

// User logout
router.post('/users/logout', logout);

module.exports = router;
