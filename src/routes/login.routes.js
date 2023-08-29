const express = require('express');
const router = express.Router();
const { handleLogin } = require('../controllers/login.controller');

router.post('/', handleLogin);

module.exports = router;
