import express, { Router } from 'express';
import { fetchAllProducts } from '../../../controllers/sellers/products';

const sellersIdProductsRouter: Router = express.Router({ mergeParams: true });

sellersIdProductsRouter.get('/', fetchAllProducts);

export default sellersIdProductsRouter;
