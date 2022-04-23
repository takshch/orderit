import { RequestHandler } from 'express';
import * as ProductService from '../../services/products';

const fetchAllProductsIds: RequestHandler = async (req, res) => {
  const owner = req.params.sellerId;

  if (owner) {
    try {
      const products = await ProductService.fetchAllProductsIds(owner);
      res.status(200).send(products);
      return;
    } catch (e) {
      console.log(e);
    }
  }

  res.boom.badImplementation();
};

export { fetchAllProductsIds };
