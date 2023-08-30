const axios = require('axios');

module.exports = async (session, verifiedCookie) => {
	const semester = session.split(' ')[0];
	const year = session.split(' ')[1];

	const url = `https://usis.bracu.ac.bd/academia/academiaSession/getAllSessionByYear?year=${year}`;

	let config = {
		headers: {
			Accept: 'application/json, text/javascript, */*; q=0.01',
			Connection: 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			Origin: 'https://usis.bracu.ac.bd',
			Referer: 'https://usis.bracu.ac.bd/academia/dashBoard/show',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
			Cookie: `JSESSIONID=${verifiedCookie.JSESSIONID}; SRVNAME=${verifiedCookie.SRVNAME}; accordion=""`,
		},
	};

	try {
		const response = await axios.post(url, {}, config);

		if (semester === 'Spring') {
			return response.data[0].id;
		} else if (semester === 'Summer') {
			return response.data[1].id;
		}
		return response.data[2].id;
	} catch (error) {
		throw error;
	}
};
