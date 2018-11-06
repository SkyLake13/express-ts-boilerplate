import http from 'http';

import * as app from './app.express';



const server = http.createServer(app.expressApp);

server.listen('4300', () => {
    console.log('Listening at 4300');
});