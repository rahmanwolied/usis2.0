const express = require('express');
const router = express.Router();
const { handleGetSchedule } = require('../controllers/schedule.controller');

router.get('/', handleGetSchedule);

module.exports = router;
