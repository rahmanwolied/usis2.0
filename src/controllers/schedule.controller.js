const readCookie = require('../helper/readCookie');
const { successResponse } = require('../controllers/response.controller');
const { fetchSchedule } = require('../services/fetchSchedule');
const getSessionId = require('../services/fetchSessionId');

const handleGetSchedule = async (req, res, next) => {
	try {
		const session = req.query.session;
		console.log(session);

		const cookies = readCookie({ verified: true });

		const sessionId = await getSessionId(session, cookies);
		const response = await fetchSchedule(sessionId, cookies);

		return successResponse(res, {
			statusCode: 200,
			message: 'Schedule fetched successfully',
			payload: {
				session,
				sessionId,
				response,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { handleGetSchedule };
