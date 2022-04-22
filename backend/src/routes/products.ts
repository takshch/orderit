import express, { Router } from 'express';
import { fetchProduct, fetchAllProducts, createProduct, deleteProduct } from '../controllers/products';
import * as validator from '../middlewares/validator/products';
import { authenticate } from '../middlewares/authenticate';

const productRouter: Router = express.Router();

productRouter.get('/', authenticate, fetchAllProducts);
productRouter.get('/:id', validator.fetchProduct, fetchProduct);

productRouter.delete('/:id', authenticate, validator.deleteProduct, deleteProduct);
productRouter.post('/', authenticate, validator.createProduct, createProduct);

export default productRouter;
