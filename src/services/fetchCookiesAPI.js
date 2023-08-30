const axios = require('axios');
const qs = require('qs');

const fetchVerifiedCookie = async (verificationCookie) => {
	const data = qs.stringify({
		j_username: 'mosheur.r.wolied@gmail.com',
		j_password: '@Wolied123',
	});
	const url = 'https://usis.bracu.ac.bd/academia/j_spring_security_check';
	const config = {
		withCredentials: true,
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
			Cookie: `JSESSIONID=${verificationCookie.JSESSIONID}; SRVNAME=${verificationCookie.SRVNAME}`,
		},
	};

	try {
		const response = await axios.post(url, data, config);
		return response;
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
	};
	const config = {
		withCredentials: true,
		headers,
	};

	try {
		const response = await axios.get(url, config);
		return response;
		// return response.headers['set-cookie'];
	} catch (err) {
		throw err;
	}
};

// const fetchVerifiedCookie = async (verificationCookie) => {
// 	var myHeaders = new Headers();
// 	myHeaders.append(
// 		'Accept',
// 		'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
// 	);
// 	myHeaders.append('Accept-Language', 'en-US,en;q=0.9');
// 	myHeaders.append('Cache-Control', 'max-age=0');
// 	myHeaders.append('Connection', 'keep-alive');
// 	myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
// 	myHeaders.append('Origin', 'https://usis.bracu.ac.bd');
// 	myHeaders.append('Referer', 'https://usis.bracu.ac.bd/academia/');
// 	myHeaders.append('Sec-Fetch-Dest', 'document');
// 	myHeaders.append('Sec-Fetch-Mode', 'navigate');
// 	myHeaders.append('Sec-Fetch-User', '?1');
// 	myHeaders.append('Upgrade-Insecure-Requests', '1');
// 	myHeaders.append(
// 		'User-Agent',
// 		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
// 	);
// 	myHeaders.append('sec-ch-ua', '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"');
// 	myHeaders.append('sec-ch-ua-mobile', '?0');
// 	myHeaders.append('Cookie', `JSESSIONID=${verificationCookie.JSESSIONID}; SRVNAME=${verificationCookie.SRVNAME}}`);

// 	var requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: 'j_username=mosheur.r.wolied%40gmail.com&j_password=%40Wolied123',
// 		method: 'POST',
// 		credentials: 'include',
// 	};

// 	const response = await fetch('https://usis.bracu.ac.bd/academia/j_spring_security_check', requestOptions);
// 	console.log('verified cookie', response.headers.get('set-cookie'));
// 	return response.headers.get('set-cookie');
// };

// const fetchVerificationCookie = async () => {
// 	const myHeaders = new Headers();
// 	myHeaders.append(
// 		'Accept',
// 		'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
// 	);
// 	myHeaders.append('Accept-Language', 'en-US,en;q=0.9');
// 	myHeaders.append('Cache-Control', 'max-age=0');
// 	myHeaders.append('Connection', 'keep-alive');
// 	myHeaders.append('Referer', 'https://usis.bracu.ac.bd/academia/dashBoard/show');
// 	myHeaders.append('Sec-Fetch-Dest', 'document');
// 	myHeaders.append('Sec-Fetch-Mode', 'navigate');
// 	myHeaders.append('Sec-Fetch-Site', 'same-origin');
// 	myHeaders.append('Sec-Fetch-User', '?1');
// 	myHeaders.append('Upgrade-Insecure-Requests', '1');
// 	myHeaders.append(
// 		'User-Agent',
// 		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'
// 	);
// 	myHeaders.append('sec-ch-ua', '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"');
// 	myHeaders.append('sec-ch-ua-mobile', '?0');

// 	var requestOptions = {
// 		headers: myHeaders,
// 		body: null,
// 		method: 'GET',
// 		credentials: 'omit',
// 	};

// 	try {
// 		const response = await fetch('https://usis.bracu.ac.bd/academia/', requestOptions);
// 		return response.headers.get('set-cookie');
// 	} catch (error) {
// 		throw error;
// 	}
// };
module.exports = { fetchVerificationCookie, fetchVerifiedCookie };
