/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';

import middleware from '../config/middleware.js';
import router from '../config/router.js';

const app = express();

mongoose
    .connect(
        'mongodb+srv://Admin:Den055037@cluster0.e5xbnau.mongodb.net/blog?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
    )
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

middleware(app);

router(app);

app.set('port', process.env.PORT || 4444);

export default app;
