import express, { Express } from 'express';
import router from './routes';
import AppInitializer from './app-initializer'

const app: Express = express();

AppInitializer(app);

app.get('/', router);

export default app;