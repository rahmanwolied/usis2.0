const fs = require('fs');
const path = require('path');

const readCookie = ({ verified }) => {
	const filePath = path.join(__dirname, '..', '..', 'cookies.json');
	try {
		const data = fs.readFileSync(filePath, 'utf8');
		const jsonObject = JSON.parse(data);
		if (verified) {
			const cookie = jsonObject.verifiedCookies;
			return {
				SRVNAME: cookie[0].value,
				JSESSIONID: cookie[1].value,
			};
		}
	} catch (err) {
		console.log(`Error reading file from disk: ${err}`);
	}
};

module.exports = readCookie;
