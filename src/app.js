//importing modules
const express = require('express');
const cors = require('cors'); //to enable CORS in a Node.js application. It adds appropriate headers to HTTP responses to allow or restrict cross-origin requests based on the configuration you provide.
const morgan = require('morgan'); // for logging http requests in console
const createError = require('http-errors'); //simplifies the process of creating error responses in the application.
const cookieParser = require('cookie-parser'); //parses cookies from incoming HTTP requests and makes them accessible in the application.
const rateLimiter = require('./config/rateLimiter');

const app = express();

//importing controllers
const { successResponse, errorResponse } = require('./controllers/response.controller');

// importing routes
const scheduleRoutes = require('./routes/schedule.routes');
const loginRoutes = require('./routes/login.routes');
const corsOptions = require('./config/cors');

//importing environment variables
app.use(cookieParser());
app.use(rateLimiter);
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

//handling routes
app.use('/api/schedule', scheduleRoutes);
app.use('/api/login', loginRoutes);

// 404 error handler
app.use((req, res, next) => {
	next(createError(404, 'This route does not exist'));
});

// error handler
app.use((err, req, res, next) => {
	errorResponse(res, {
		statusCode: err.status,
		message: err.message,
	});
});

module.exports = { app };
