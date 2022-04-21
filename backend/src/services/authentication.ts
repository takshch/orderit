import jwt from 'jsonwebtoken';
import fs from 'fs';

var jwtKey = fs.readFileSync('keys/jwt.key');
if (!jwtKey) {
  throw new Error('jwt key must exists');
}

const generateAccessToken = (payload: object) => {
  const token = jwt.sign(payload, jwtKey, { algorithm: 'ES256', expiresIn: '1d' });
  return token;
};

const validateAccessToken = (token: string) => {
  const payload = jwt.verify(token, jwtKey, { algorithms: ['ES256'] });
  if (typeof payload === 'string') {
    return {};
  }

  return payload;
};

export { validateAccessToken, generateAccessToken };
