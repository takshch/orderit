import express, { Router } from 'express';
import { createProduct, fetchProduct } from '../controllers/products';
import * as validator from '../middlewares/validator/products';

const productRouter: Router = express.Router();

productRouter.get('/:id', validator.fetchProduct, fetchProduct);
productRouter.post('/', validator.createProduct, createProduct);

export default productRouter;
