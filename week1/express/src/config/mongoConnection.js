const mongoose = require('mongoose');

const URL = 'mongodb+srv://Admin:Den055037@cluster0.e5xbnau.mongodb.net/internship2022-backend?retryWrites=true&w=majority';

const connection = mongoose.createConnection(URL, {
    useNewUrlParser: true,
});

connection.on('connecting', () => {
    console.log('\x1b[32m', 'MongoDB :: connecting');
});

connection.on('error', (error) => {
    console.log('\x1b[31m', `MongoDB :: connection ${error}`);
    mongoose.disconnect();
});

connection.on('connected', () => {
    console.log('\x1b[32m', 'MongoDB :: connected');
});

connection.once('open', () => {
    console.log('\x1b[32m', 'MongoDB :: connection opened');
});

connection.on('reconnected', () => {
    console.log('\x1b[33m', 'MongoDB :: reconnected');
});

connection.on('reconnectFailed', () => {
    console.log('\x1b[31m', 'MongoDB :: reconnectFailed');
});

connection.on('disconnected', () => {
    console.log('\x1b[31m', 'MongoDB :: disconnected');
});

connection.on('fullsetup', () => {
    console.log('\x1b[33m', 'MongoDB :: reconnecting... %d');
});

module.exports = connection;
