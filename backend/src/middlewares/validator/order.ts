import Joi from 'joi';
import { RequestHandler } from 'express';
import { UUID_LENGTH } from '../../utils/uuid';
import { simplifyErrorMessage } from './helpers';

export const orderQuote: RequestHandler = async (req, res, next) => {
  const productSchema = Joi.object().strict().keys({
    id: Joi.string().trim().required().min(UUID_LENGTH),
    quantity: Joi.number().required().min(1),
  });

  const requestSchema = Joi.object().strict().keys({
    products: Joi.array().required().min(1).items(productSchema)
  });

  try {
    await requestSchema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};
