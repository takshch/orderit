import { RequestHandler } from 'express';
import * as ProductService from '../services/products';

const { assign } = Object;

const fetchAllProducts: RequestHandler = async (req, res) => {
  const owner = req?.userData?.uid;

  if(owner) {
    try {
      const products = await ProductService.fetchAllProducts(owner);
      res.status(200).send(products);
      return;
    } catch(e) {
      console.log(e);
    }
  }

  res.boom.badImplementation();
};

const createProduct: RequestHandler = async (req, res) => {
  try {
    const owner = req?.userData?.uid;
    if (!owner) {
      res.boom.badImplementation();
    }

    const data = assign({}, req.body, { owner });
    const id = await ProductService.createProduct(data);
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

const deleteProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const owner = req?.userData?.uid;

  if (owner) {
    try {
      const status = await ProductService.deleteProduct(id, owner);
      if (status === true) {
        res.status(200).send();
        return;
      }
    } catch (e) {
      console.log(e);
    }
  }

  res.status(204).send();
};

export { fetchProduct, fetchAllProducts, createProduct, deleteProduct };
