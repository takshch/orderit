import express, { Router } from 'express';
import * as validator from '../middlewares/validator/account';
import { authenticate, allowSeller } from '../middlewares/authenticate';
import { getShopDetails, writeShopDetails } from '../controllers/account';

const router: Router = express.Router();

router.get('/shop_details', authenticate, allowSeller, getShopDetails);
router.post('/shop_details', authenticate, allowSeller, validator.shopDetails, writeShopDetails);

export default router;
