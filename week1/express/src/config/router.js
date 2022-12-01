/* eslint-disable import/extensions */
import express from 'express';
import http from 'http';

import UsersRouter from '../components/Users/router.js';

export default (app) => {
    const router = express.Router();

    app.use('/v1/users', UsersRouter);

    app.use((req, res) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    app.use(router);
};
