/* eslint-disable import/extensions */
import http from 'http';

import server from './server.js';
import events from './events.js';

const PORT = server.get('port');

events.bind(http.createServer(server).listen(PORT));
