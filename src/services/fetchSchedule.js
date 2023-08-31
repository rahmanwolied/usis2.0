const axios = require('axios');

const fetchSchedule = async (sessionId, verifiedCookie) => {
	const jsessionid = verifiedCookie.JSESSIONID;
	const srvname = verifiedCookie.SRVNAME;

	const url = `https://usis.bracu.ac.bd/academia/academicSection/listAcademicSectionWithSchedule?academiaSession=${sessionId}&rows=-1&page=1`;
	const config = {
		withCredentials: true,
		headers: {
			Accept: 'application/json, text/javascript, */*; q=0.01',
			'Accept-Language': 'en-US,en;q=0.9',
			Connection: 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			Referer: 'https://usis.bracu.ac.bd/academia/dashBoard/show',
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-origin',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
			'X-Requested-With': 'XMLHttpRequest',
			'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"macOS"',
			Cookie: `JSESSIONID=${jsessionid}; SRVNAME=${srvname}; accordion=""`,
		},
	};
	try {
		const response = await axios.get(url, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

module.exports = { fetchSchedule };
