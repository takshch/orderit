import Joi from 'joi';
import { RequestHandler } from 'express';
import { simplifyErrorMessage } from './helpers';

export const shopDetails: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().strict().keys({
    name: Joi.string().required(),
    address: Joi.string().required()
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};
