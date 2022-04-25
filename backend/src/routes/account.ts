import express, { Router } from 'express';
import * as validator from '../middlewares/validator/account';
import { authenticate, allowSeller } from '../middlewares/authenticate';
import { writeShopDetails } from '../controllers/account';

const router: Router = express.Router();

router.post('/shop_details', authenticate, allowSeller, validator.shopDetails, writeShopDetails);

export default router;
