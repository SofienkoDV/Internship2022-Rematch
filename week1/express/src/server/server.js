/* eslint-disable import/extensions */
import express from 'express';

import middleware from '../config/middleware.js';
import router from '../config/router.js';
import connect from '../config/mongoConnection.js';

const app = express();

middleware(app);

router(app);

connect();

app.set('port', process.env.PORT || 4444);

export default app;
