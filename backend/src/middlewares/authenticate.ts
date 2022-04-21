import { RequestHandler } from "express";
import { validateAccessToken } from "../services/authentication";
import config from 'config';

const { assign } = Object;

const authenticate: RequestHandler = (req, res, next) => {
  const cookieName: string = config.get('cookieName');
  const token = req.signedCookies[cookieName];

  try {
    const { uid } = validateAccessToken(token);
    if (!uid) {
      res.boom.badImplementation();
    }

    assign(req, { userData: { uid } });
    next();
  } catch (e: any) {
    res.boom.unauthorized();
  }
};

export { authenticate };