import express, { Router } from 'express';
import * as validator from '../middlewares/validator/order';
import * as controller from '../controllers/order';

const orderRouter: Router = express.Router();

orderRouter.post('/quote', validator.orderQuote, controller.orderQuote);

export default orderRouter;
