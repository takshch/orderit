import express, { Router } from 'express';
import productRouter from './products';
import sessionRouter from './session';
import testRouter from './test';

const router: Router = express.Router();

router.use('/session', sessionRouter);
router.use('/products', productRouter);

if (process.env.NODE_ENV === 'development') {
  router.use('/test', testRouter);
}

export default router;