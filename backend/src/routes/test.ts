import express, { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';

const testRouter: Router = express.Router();

testRouter.get('/', authenticate);

export default testRouter;
