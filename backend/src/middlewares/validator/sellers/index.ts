import Joi from 'joi';
import { RequestHandler } from 'express';

const sellerRoute: RequestHandler = async (req, res, next) => {
  const schema = Joi.object().keys({
    sellerId: Joi.string().trim().required()
  });

  try {
    await schema.validateAsync(req.params);
    next();
  } catch (error: any) {
    res.boom.badRequest('seller id is required');
  }
};

export { sellerRoute };
