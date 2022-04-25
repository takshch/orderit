import { RequestHandler } from 'express';
import * as AccountService from '../services/account';

export const writeShopDetails: RequestHandler = async (req, res) => {
  const owner = req?.userData?.uid;

  if (owner) {
    try {
      await AccountService.writeShopDetails(owner, req.body);

      res.status(200).send();
      return;
    } catch (e) {
      console.log(e);
    }
  }

  res.boom.badImplementation();
};
