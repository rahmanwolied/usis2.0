const axios = require('axios');
const qs = require('qs');

const fetchVerifiedCookie = async (verificationCookie) => {
	const data = qs.stringify({
		j_username: 'mosheur.r.wolied@gmail.com',
		j_password: '@Wolied123',
	});
	const url = 'https://usis.bracu.ac.bd/academia/j_spring_security_check';
	const config = {
		headers: {
			Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
			'Accept-Language': 'en-US,en;q=0.9',
			'Cache-Control': 'max-age=0',
			Connection: 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			Origin: 'https://usis.bracu.ac.bd',
			Referer: 'https://usis.bracu.ac.bd/academia/',
			'Sec-Fetch-Dest': 'document',
			'Sec-Fetch-Mode': 'navigate',
			'Sec-Fetch-Site': 'same-origin',
			'Sec-Fetch-User': '?1',
			'Upgrade-Insecure-Requests': '1',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
			'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"macOS"',
			Cookie: `JSESSIONID=${verificationCookie.JSESSIONID}; SRVNAME=${verificationCookie.SRVNAME}`,
		},
	};

	try {
		const response = await axios.post(url, data, config);
		return response.headers['set-cookie'];
	} catch (err) {
		throw err;
	}
};

const fetchVerificationCookie = async () => {
	const url = 'https://usis.bracu.ac.bd/academia/';
	const headers = {
		Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
		'Accept-Language': 'en-US,en;q=0.9',
		'Cache-Control': 'max-age=0',
		Connection: 'keep-alive',
		Referer: 'https://usis.bracu.ac.bd/academia/dashBoard/show',
		'Sec-Fetch-Dest': 'document',
		'Sec-Fetch-Mode': 'navigate',
		'Sec-Fetch-Site': 'same-origin',
		'Sec-Fetch-User': '?1',
		'Upgrade-Insecure-Requests': '1',
		'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
		'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
		'sec-ch-ua-mobile': '?0',
		'sec-ch-ua-platform': '"macOS"',
	};

	try {
		const response = await axios.get(url, { headers });
		return response.headers['set-cookie'];
	} catch (err) {
		throw err;
	}
};

module.exports = { fetchVerificationCookie, fetchVerifiedCookie };
