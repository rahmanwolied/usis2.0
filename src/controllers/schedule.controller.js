const createError = require('http-errors');
const { successResponse } = require('../controllers/response.controller');
const { fetchSchedule } = require('../services/fetchSchedule');

const handleGetSchedule = async (req, res, next) => {
	try {
		let cookies = req.headers['cookie'];
		if (cookies === undefined || cookies === null) {
			throw createError(401, 'Unauthorized');
		}
		cookies = cookies.split(';');
		cookies = {
			JSESSIONID: cookies[0].split('=')[1],
			SRVNAME: cookies[1].split('=')[1],
		};

		console.log(cookies);
		const response = await fetchSchedule('Fall 2023', cookies);

		return successResponse(res, {
			statusCode: 200,
			message: 'Schedule fetched successfully',
			payload: {
				cookies: cookies,
				response,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { handleGetSchedule };
