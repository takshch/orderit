import boom from 'express-boom';
import { Express } from 'express';

function AppInitializer(app: Express) {
  app.use(boom());
}

export default AppInitializer;