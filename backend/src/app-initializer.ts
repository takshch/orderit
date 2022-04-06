import boom from 'express-boom';
import express, { Express, RequestHandler } from 'express';
import morgan from 'morgan';
import { MorganStream } from './utils/logger';

function AppInitializer(app: Express) {
  // required for sending error objects with error codes
  // attach boom to res
  app.use(boom());

  app.use(morgan('combined', { stream: new MorganStream() }));

  // only parse response if Content type matches
  app.use(express.json());
}

export default AppInitializer;
