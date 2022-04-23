import express, { Router } from 'express';
import sellersIdProductsRouter from './products';

const sellersIdRouter: Router = express.Router({ mergeParams: true });

sellersIdRouter.use('/products', sellersIdProductsRouter);

export default sellersIdRouter;
