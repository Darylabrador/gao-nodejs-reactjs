const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');

// import manual middleware
const headerApi = require('./middlewares/configApi');
const isAuthAPI = require('./middlewares/isAuthApi');

// import routes files
const desktopRoutes     = require('./routes/desktopRoutes');
const clientRoutes      = require('./routes/clientRoutes');
const attributionRoutes = require('./routes/attributionRoutes');
const autRoutes         = require('./routes/authRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use middleware
app.use(headerApi);


// Initiate all routes
app.use('/api', autRoutes);
app.use('/api', isAuthAPI, desktopRoutes);
app.use('/api', isAuthAPI, clientRoutes);
app.use('/api', isAuthAPI, attributionRoutes);

module.exports = app;