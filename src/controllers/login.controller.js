const { fetchVerificationCookie, fetchVerifiedCookie } = require('../services/fetchCookies');
const { successResponse } = require('./response.controller');

const handleLogin = async (req, res, next) => {
	try {
		//clear existing cookies
		res.clearCookie('JSESSIONID');
		res.clearCookie('SRVNAME');

		//getting the inital verification cookie by making a GET request to the login page
		let verificationCookie = await fetchVerificationCookie();
		res.cookie(verificationCookie[1]);

		const jsessionid = verificationCookie[0].split(';')[0].split('=')[1];
		const srvname = verificationCookie[1].split(';')[0].split('=')[1];
		verificationCookie = {
			JSESSIONID: jsessionid,
			SRVNAME: srvname,
		};

		//getting the verified cookies by making a POST request to the login page
		const verifiedCookies = await fetchVerifiedCookie(verificationCookie);
		if (verifiedCookies) {
			verifiedCookies.forEach((cookie) => {
				res.cookie(cookie);
			});
			return successResponse(res, {
				statusCode: 200,
				message: 'Login successful',
				payload: { verifiedCookies, verificationCookie },
			});
		}
	} catch (err) {
		next(err);
	}
};
module.exports = { handleLogin };
