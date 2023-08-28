require('dotenv').config();
//importing modules
const express = require('express');
const cors = require('cors'); //to enable CORS in a Node.js application. It adds appropriate headers to HTTP responses to allow or restrict cross-origin requests based on the configuration you provide.
const morgan = require('morgan'); // for logging http requests in console
const xssClean = require('xss-clean'); // for preventing cross site scripting attacks
const createError = require('http-errors'); //simplifies the process of creating error responses in the application.
const cookieParser = require('cookie-parser'); //parses cookies from incoming HTTP requests and makes them accessible in the application.
const rateLimiter = require('./config/rateLimiter');

const app = express();

app.use(cookieParser());
app.use(rateLimiter);
app.use(xssClean());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;
