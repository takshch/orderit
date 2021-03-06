import { RequestHandler } from 'express';
import * as AuthService from '../services/session';
import { generateAccessToken } from '../services/authentication';
import config from 'config';
import pick from 'lodash.pick';


const { assign } = Object;

const createAccount: RequestHandler = async (req, res) => {
  const { type } = req.body;
  const userDetails = pick(req.body, ['email', 'password']);

  try {
    let uid;

    if (type) {
      const data = assign({}, userDetails, { role: type });
      uid = await AuthService.createUserWithRole(data);
    } else {
      uid = await AuthService.createUser(userDetails);
    }

    if (!uid) {
      res.status(200).send({ message: 'user already exists' });
      return;
    }

    const token = generateAccessToken({ uid });

    const cookieParams = {
      httpOnly: true,
      sameSite: true,
      expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
      signed: true,
    };
    res.cookie(config.get('cookieName'), token, cookieParams);

    res.status(201).send({ uid });
  } catch (e) {
    console.log(e);
    res.boom.badImplementation();
  }
};

const login: RequestHandler = async (req, res) => {
  try {
    const uid = await AuthService.login(req.body);

    if (uid) {
      const token = generateAccessToken({ uid });

      const cookieParams = {
        httpOnly: true,
        sameSite: true,
        expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),
        signed: true,
      };
      res.cookie(config.get('cookieName'), token, cookieParams);

      res.status(201).send({ uid });
    }
  } catch (e) {
    console.log(e);
    res.boom.badImplementation();
  }
};

export { createAccount, login };
