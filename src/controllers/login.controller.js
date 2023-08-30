const { fetchVerificationCookie, fetchVerifiedCookie } = require('../services/fetchCookiesAPI');
const fetchVerifiedCookie_Puppeteer = require('../services/fetchVerifiedCookie_Puppeteer');
const { successResponse } = require('./response.controller');

const useAPI = false;
const handleLogin = async (req, res, next) => {
	try {
		let verificationCookie;
		let verifiedCookie;
		if (useAPI) {
			//getting the inital verification cookie by making a GET request to the login page
			const response = await fetchVerificationCookie();
			verificationCookie = response.headers['set-cookie'];
			res.cookie(verificationCookie[1]);

			const jsessionid = verificationCookie[0].split(';')[0].split('=')[1];
			const srvname = verificationCookie[1].split(';')[0].split('=')[1];
			verificationCookie = {
				JSESSIONID: jsessionid,
				SRVNAME: srvname,
			};

			//getting the verified cookies by making a POST request to the login page
			const response2 = await fetchVerifiedCookie(verificationCookie);
			verifiedCookie = response2.headers['set-cookie'];
			if (verifiedCookie) {
				verifiedCookie.forEach((cookie) => {
					res.cookie(cookie);
				});
			}
		} else {
			const output = await fetchVerifiedCookie_Puppeteer();
			verificationCookie = output.verificationCookies;
			verifiedCookie = output.verifiedCookies;
		}
		return successResponse(res, {
			statusCode: 200,
			message: 'Login successful',
			payload: {
				verifiedCookie,
			},
		});
	} catch (err) {
		next(err);
	}
};

const showLogin = async (req, res, next) => {
	try {
		const response = await fetchVerificationCookie();
		const cookies = response.headers['set-cookie'];
		cookies.forEach((cookie) => {
			res.cookie(cookie);
		});
		res.send(response.data);
	} catch (err) {
		next(err);
	}
};
module.exports = { handleLogin, showLogin };
