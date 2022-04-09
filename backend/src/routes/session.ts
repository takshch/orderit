import express, { Router } from 'express';
import { createAccount } from '../controllers/session';
import * as validator from '../middlewares/validator/session';

const sessionRouter: Router = express.Router();

sessionRouter.post('/register', validator.createAccount, createAccount);

export default sessionRouter;