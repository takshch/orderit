import Joi from 'joi';
import { RequestHandler } from 'express';
import { simplifyErrorMessage } from './helpers';
import { USER_ROLE } from '../../services/session';

const createAccount: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().strict().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    type: Joi.string().valid(USER_ROLE.SELLER).optional()
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error: any) {
    const message = simplifyErrorMessage(error.details[0].message);
    res.boom.badRequest(message);
  }
};

const login: RequestHandler = async (req, res, next) => {
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

export { createAccount, login };
