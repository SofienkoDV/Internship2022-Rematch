const express = require('express');

const { connect } = require('../config/db');
const middleware = require('../config/middleware');
const router = require('../config/router');

const app = express();

middleware.init(app);

router.init(app);

connect();

app.set('port', process.env.PORT || 4444);

module.exports = app;
