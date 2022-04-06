import express, { Express, RequestHandler } from 'express';
import router from './routes';
import AppInitializer from './app-initializer'

const app: Express = express();

AppInitializer(app);

app.use(router);

// throws 404 Not Found if route doesn't exists
const notFound: RequestHandler = (_, res) => {
  res.boom.notFound();
};

app.use(notFound);

export default app;