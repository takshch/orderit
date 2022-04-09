import Joi from 'joi';
import { RequestHandler } from 'express';
import { simplifyErrorMessage } from './helpers';

const createAccount: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().strict().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};

export { createAccount };
