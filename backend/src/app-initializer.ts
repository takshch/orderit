import boom from 'express-boom';
import express, { Express } from 'express';
import morgan from 'morgan';
import { MorganStream } from './utils/logger';
import cookieParser from 'cookie-parser';
import fs from 'fs';

const cookieSECRET = fs.readFileSync('keys/cookie.key', 'utf8');
if (!cookieSECRET) {
  throw new Error('cookie key must exists');
}

function AppInitializer(app: Express) {
  // required for sending error objects with error codes
  // attach boom to res
  app.use(boom());

  app.use(morgan('combined', { stream: new MorganStream() }));

  // only parse response if Content type matches
  app.use(express.json());

  app.use(cookieParser(cookieSECRET));
}

export default AppInitializer;
