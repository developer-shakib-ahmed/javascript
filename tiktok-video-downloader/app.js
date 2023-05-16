/**
 * https://www.cole13.com/
 * 
 * https://lovetik.com/
 * 
 * https://tiktok.codespikex.com/
 */


// External Imports
const express = require("express");
const dotenv = require('dotenv');
const path = require('path');

// Internal Imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler');

const indexRouter = require('./router/indexRouter');
const apiRouter = require('./router/apiRouter');

const app = express();
dotenv.config();

// Request parsers
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Set view engine
app.set( "view engine", "ejs" );

// Set static folder
app.use( express.static( path.join( __dirname, "public" ) ) );

// Routing setup
app.use( '/', indexRouter );
app.use( '/api', apiRouter );


// 404 not found handler
app.use( notFoundHandler );

// common error handler
app.use( errorHandler );


// App run
app.listen(process.env.PORT, () => {
  console.log( `App listening to port ${process.env.PORT}` );
});