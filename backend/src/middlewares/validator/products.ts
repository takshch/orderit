import Joi from 'joi';
import { RequestHandler } from 'express';
import { simplifyErrorMessage } from './helpers';
import { UUID_LENGTH } from '../../utils/uuid';

const createProduct: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().strict().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    src: Joi.string().uri().optional(),
    // uid: Joi.string().required()
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};

const fetchProduct: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.string().trim().required().min(UUID_LENGTH)
  });

  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error: any) {
    res.boom.badRequest('product id is required');
  }
};


export { createProduct, fetchProduct };
