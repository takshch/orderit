import express, { Router } from 'express';
import * as validator from '../../middlewares/validator/sellers';
import sellersIdRouter from './id';

const sellersRouter: Router = express.Router();

sellersRouter.use('/:sellerId', validator.sellerRoute, sellersIdRouter);

export default sellersRouter;
