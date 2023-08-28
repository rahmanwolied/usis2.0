const rateLimit = require('express-rate-limit'); //prevent abuse or overuse of your server's resources by limiting the rate at which clients can make requests.

const rateLimiter = rateLimit({
	windowMs: 1000, // 1 sec
	max: 10, // 10 requests
	message: `Limit is ${max} requests per ${
		windowMs / 1000 === 1 ? '1 second' : `${windowMs / 1000} seconds.`
	} Too many requests from this IP, go easy man.`,
});

module.exports = rateLimiter;
