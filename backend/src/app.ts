import express, { Express } from 'express';
import router from './routes';
import AppInitializer from './app-initializer';
const PORT = 3000;

export default function startServer(): void {
  const app: Express = express();

  AppInitializer(app);

  app.get('/', router);

  app.listen(PORT, () => {
    console.log('Example app started');
  });
}
