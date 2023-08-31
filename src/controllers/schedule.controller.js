const readCookie = require('../helper/readCookie');
const { successResponse } = require('../controllers/response.controller');
const { fetchSchedule } = require('../services/fetchSchedule');
const getSessionId = require('../services/fetchSessionId');
const { cleanSchedule } = require('../helper/cleanResponse');

const handleGetSchedule = async (req, res, next) => {
	try {
		const session = req.query.session;
		console.log(session);

		const cookies = readCookie({ verified: true });

		const sessionId = await getSessionId(session, cookies);
		const response = await fetchSchedule(sessionId, cookies);
		const schedule = cleanSchedule(response);

		return successResponse(res, {
			statusCode: 200,
			message: 'Schedule fetched successfully',
			payload: {
				session,
				sessionId,
				schedule,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = { handleGetSchedule };
