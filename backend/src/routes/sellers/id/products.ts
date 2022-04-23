import express, { Router } from 'express';
import { fetchAllProductsIds } from '../../../controllers/sellers/products';

const sellersIdProductsRouter: Router = express.Router({ mergeParams: true });

sellersIdProductsRouter.get('/', fetchAllProductsIds);

export default sellersIdProductsRouter;
