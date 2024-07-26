const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');
const { validateLoginInput } = require('../middlewares/validateInput');

// @route  POST api/login
// @desc   Authenticate user and get token
// @access Public
router.post('/login', validateLoginInput, loginUser);

module.exports = router;
