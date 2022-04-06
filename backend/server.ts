import http from 'http';
import app from './src/app';
import logger from './src/utils/logger';
import './types/global';

global.logger = logger;

const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT);

server.on('error', onError);
server.on('listening', onListening);

function onError(err: unknown) {
  throw err;
}

function onListening() {
  logger.info(`Server is running on ${PORT} and start listening....`);
}
