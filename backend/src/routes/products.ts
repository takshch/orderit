import express, { Router } from 'express';
import { createProduct } from '../controllers/products';
import * as validator from '../middlewares/validator/products';

const productRouter: Router = express.Router();

productRouter.post('/', validator.createProduct, createProduct);

export default productRouter;
