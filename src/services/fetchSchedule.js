const axios = require('axios');

const getSessionId = async (session, verifiedCookie) => {
	const semester = session.split(' ')[0];
	const year = session.split(' ')[1];
	console.log('2', semester, year, verifiedCookie);

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

// const fetchSchedule = async (session, verifiedCookie) => {
// 	// const sessionId = await getSessionId(session, verifiedCookie);
// 	const sessionId = 627122;
// 	const jsessionid = verifiedCookie.JSESSIONID;
// 	const srvname = verifiedCookie.SRVNAME;

// 	console.log('1', session, sessionId, jsessionid, srvname);
// 	const url = `https://usis.bracu.ac.bd/academia/studentCourse/showClassScheduleInTabularFormatInGrid?query=&academiaSession=${sessionId}&_search=false&nd=1693148419192&rows=-1&page=1&sidx=course_code&sord=asc`;
// 	var myHeaders = new Headers();
// 	myHeaders.append('Accept', 'application/json, text/javascript, */*; q=0.01');
// 	myHeaders.append('Accept-Language', 'en-US,en;q=0.9');
// 	myHeaders.append('Connection', 'keep-alive');
// 	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
// 	myHeaders.append('Referer', 'https://usis.bracu.ac.bd/academia/dashBoard/show');
// 	myHeaders.append('Sec-Fetch-Dest', 'empty');
// 	myHeaders.append('Sec-Fetch-Mode', 'cors');
// 	myHeaders.append('Sec-Fetch-Site', 'same-origin');
// 	myHeaders.append(
// 		'User-Agent',
// 		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
// 	);
// 	myHeaders.append('X-Requested-With', 'XMLHttpRequest');
// 	myHeaders.append('sec-ch-ua', '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"');
// 	myHeaders.append('sec-ch-ua-mobile', '?0');
// 	myHeaders.append('sec-ch-ua-platform', '"macOS"');
// 	myHeaders.append('Cookie', `JSESSIONID=${jsessionid}; SRVNAME=${srvname}`);

// 	var requestOptions = {
// 		method: 'GET',
// 		headers: myHeaders,
// 		redirect: 'follow',
// 	};

// 	try {
// 		const response = await fetch(url, requestOptions);
// 		const text = await response.text();
// 		return text;
// 	} catch (error) {
// 		throw error;
// 	}
// };
const fetchSchedule = async (session, verifiedCookie) => {
	// const sessionId = await getSessionId(session, verifiedCookie);
	const sessionId = 627122;
	const jsessionid = verifiedCookie.JSESSIONID;
	const srvname = verifiedCookie.SRVNAME;
	console.log('1', session, sessionId, jsessionid, srvname);
	const url = `https://usis.bracu.ac.bd/academia/studentCourse/showClassScheduleInTabularFormatInGrid?query=&academiaSession=${sessionId}&_search=false&nd=1693148419192&rows=-1&page=1&sidx=course_code&sord=asc`;
	const config = {
		withCredentials: true,
		headers: {
			Accept: 'application/json, text/javascript, */*; q=0.01',
			'Accept-Language': 'en-US,en;q=0.9',
			Connection: 'keep-alive',
			'Content-Type': 'application/x-www-form-urlencoded',
			Referer: 'https://usis.bracu.ac.bd/academia/dashBoard/show',
			'Sec-Fetch-Dest': 'empty',
			// 'Sec-Fetch-Mode': 'cors',
			// 'Sec-Fetch-Site': 'same-origin',
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
			// 'X-Requested-With': 'XMLHttpRequest',
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
