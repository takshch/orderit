import boom from 'express-boom';
import { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { MorganStream } from './utils/logger';
import '../types/global';

function AppInitializer(app: Express) {
  // required for sending error objects with error codes
  // attach boom to res
  app.use(boom());

  app.use(morgan('combined', { stream: new MorganStream() }));

  // only parse response if Content type matches
  app.use(bodyParser.json({ type: 'application/json' }));
}

export default AppInitializer;
