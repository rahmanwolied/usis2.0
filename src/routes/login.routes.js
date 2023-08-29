const express = require('express');
const router = express.Router();
const { handleLogin, showLogin } = require('../controllers/login.controller');

router.post('/', handleLogin);
router.get('/', showLogin);

module.exports = router;
