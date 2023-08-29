const axios = require('axios');
const createError = require('http-errors');
const { successResponse } = require('../controllers/response.controller');
const { fetchSchedule } = require('../services/fetchSchedule');

const handleGetSchedule = async (req, res, next) => {
	try {
		if (req.cookies === undefined || req.cookies === null) {
			throw createError(401, 'Unauthorized');
		}
		console.log(req.cookies);
		const response = await fetchSchedule('Fall 2023', req.cookies);

		return successResponse(res, {
			statusCode: 200,
			message: 'Schedule fetched successfully',
			payload: {
				cookies: req.cookies,
				response,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { handleGetSchedule };
