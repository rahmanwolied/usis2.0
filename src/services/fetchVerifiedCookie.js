const puppeteer = require('puppeteer');
const fs = require('fs').promises;

require('dotenv').config();

async function fetchVerifiedCookie_Puppeteer() {
	console.log('Logging in...');

	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();

	await page.goto('https://usis.bracu.ac.bd/academia/');

	const verificationCookies = await page.cookies();

	await page.type('#username', process.env.EMAIL);
	await page.type('#password', process.env.PASS);

	const login = '#ctl00_leftColumn_ctl00_btnLogin';
	await page.click(login);

	await page.waitForSelector('#student-class-schedule-dashboard-div');
	console.log('Logged in successfully');

	const verifiedCookies = await page.cookies();
	browser.close();

	const output = {
		verificationCookies,
		verifiedCookies,
	};
	const cookieString = JSON.stringify(output);

	try {
		console.log('Storing Cookie...');
		await fs.writeFile('cookies.json', cookieString);
		console.log('Cookie was succesfully stored');
		return output;
	} catch (err) {
		console.error('error occured', err);
	}
}

module.exports = fetchVerifiedCookie_Puppeteer;
