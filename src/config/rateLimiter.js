const rateLimit = require('express-rate-limit'); //prevent abuse or overuse of your server's resources by limiting the rate at which clients can make requests.
const max = 10;
const windowMs = 1000;
const message = `Limit is ${max} requests per ${
	windowMs / 1000 === 1 ? '1 second' : `${windowMs / 1000} seconds.`
} Too many requests from this IP, go easy man.`;

const rateLimiter = rateLimit({ windowMs, max, message });

module.exports = rateLimiter;
