import express, { Router } from 'express';
import productRouter from './products';
import sessionRouter from './session';
import testRouter from './test';
import sellersRouter from './sellers';
import accountRouter from './account';
import orderRouter from './order';

const router: Router = express.Router();

router.use('/session', sessionRouter);
router.use('/products', productRouter);
router.use('/sellers', sellersRouter);
router.use('/account', accountRouter);
router.use('/order', orderRouter);

if (process.env.NODE_ENV === 'development') {
  router.use('/test', testRouter);
}

export default router;