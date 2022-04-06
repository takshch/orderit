import { RequestHandler } from 'express';
import { createProductDocument } from '../services/products';

const createProduct: RequestHandler = async (req, res, next) => {
  try {
    const id = await createProductDocument(req.body);
    res.status(201).send({ id });
  } catch (e) {
    console.log(e);
    res.boom.badImplementation();
  }
}

export { createProduct };