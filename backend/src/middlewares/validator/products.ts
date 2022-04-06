import Joi from 'joi';
import { RequestHandler } from 'express';
import { simplifyErrorMessage } from './helpers';

const productSchema = Joi.object().strict().keys({
  name: Joi.string().required(),
  price: Joi.number().required(),
  src: Joi.string().uri().optional(),
  // uid: Joi.string().required()
});

const createProduct: RequestHandler = async (req, res, next) => {
  try {
    await productSchema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};

export { createProduct };
