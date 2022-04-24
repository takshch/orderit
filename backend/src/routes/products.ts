import express, { Router } from 'express';
import { fetchProduct, fetchAllProducts, createProduct, deleteProduct } from '../controllers/products';
import * as validator from '../middlewares/validator/products';
import { allowSeller, authenticate } from '../middlewares/authenticate';

const productRouter: Router = express.Router();

productRouter.get('/', authenticate, fetchAllProducts);
productRouter.get('/:id', validator.fetchProduct, fetchProduct);

// only seller can access these routes
productRouter.delete('/:id', authenticate, allowSeller, validator.deleteProduct, deleteProduct);
productRouter.post('/', authenticate, allowSeller, validator.createProduct, createProduct);

export default productRouter;
