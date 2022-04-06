import { RequestHandler } from 'express';
import * as ProductService from '../services/products';

const createProduct: RequestHandler = async (req, res) => {
  try {
    const id = await ProductService.createProduct(req.body);
    res.status(201).send({ id });
  } catch (e) {
    console.log(e);
    res.boom.badImplementation();
  }
};

const fetchProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await ProductService.fetchProduct(id);

    if (data) {
      res.status(200).send(data);
    } else {
      res.status(200).send({ message: 'product not found' });
    }
  } catch (e) {
    console.log(e);
    res.boom.badImplementation();
  }
};

export { createProduct, fetchProduct };
