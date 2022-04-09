import { RequestHandler } from "express";
import { validateAccessToken } from "../services/authentication";
import config from 'config';

const authenticate: RequestHandler = (req, res, next) => {
  const cookieName: string = config.get('cookieName');
  const token = req.signedCookies[cookieName];

  try {
    validateAccessToken(token);
  } catch (e: any) {
    if (e.name === 'TokenExpiredError') {
      res.boom.unauthorized('session is expired');
    }
  }
};

export { authenticate };