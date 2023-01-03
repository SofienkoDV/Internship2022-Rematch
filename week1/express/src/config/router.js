const express = require('express');
const http = require('http');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const UsersRouter = require('../components/Users/router');
const TasksRouter = require('../components/Tasks/router');

module.exports = {
    init(app) {
        const router = express.Router();

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        app.use('/v1/users', UsersRouter);
        app.use('/v1/tasks', TasksRouter);

        app.use((req, res) => {
            res.status(404).send(http.STATUS_CODES[404]);
        });

        app.use(router);
    },
};
