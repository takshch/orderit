import jwt from 'jsonwebtoken';
import fs from 'fs';

var jwtKey = fs.readFileSync('keys/jwt.key');
if (!jwtKey) {
  throw new Error('jwt key must exists');
}

const generateAccessToken = (payload: object) => {
  const token = jwt.sign(payload, jwtKey, { algorithm: 'ES256', expiresIn: '10s' });
  return token;
};

const validateAccessToken = (token: string) => {
  return jwt.verify(token, jwtKey, { algorithms: ['ES256'] });
};

export { validateAccessToken, generateAccessToken };
