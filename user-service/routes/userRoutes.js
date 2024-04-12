// user-service/src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createUser, getAllUsers, getUserById } = require('../controllers/userController');

// Create user
router.post('/users', [
  check('username', 'Username is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], createUser);

// Get all users
router.get('/users', getAllUsers);

// Get user by ID
router.get('/users/:id', getUserById);

module.exports = router;
