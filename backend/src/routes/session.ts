import express, { Router } from 'express';
import { createAccount, login } from '../controllers/session';
import * as validator from '../middlewares/validator/session';

const sessionRouter: Router = express.Router();

sessionRouter.post('/register', validator.createAccount, createAccount);
sessionRouter.post('/login', validator.login, login);

export default sessionRouter;