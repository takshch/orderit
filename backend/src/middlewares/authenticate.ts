import { RequestHandler } from "express";
import { validateAccessToken } from "../services/authentication";
import config from 'config';
import { userHasRole, USER_ROLE } from "../services/session";

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

export const allowSeller: RequestHandler = async (req, res, next) => {
  const uid = req.userData?.uid;

  if (uid) {
    // checks whether user has seller role or not
    const hasRole = await userHasRole(uid, USER_ROLE.SELLER);
    if (hasRole) {
      next();
    } else {
      res.boom.unauthorized();
    }
  } else {
    res.boom.badImplementation();
  }
};

export { authenticate };