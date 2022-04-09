import assert from 'assert';
import { generateAccessToken, validateAccessToken } from "../../src/services/authentication";

describe('authentication service', () => {
  it('generateAccessToken function', () => {
    const token = generateAccessToken({ uid: 'asfsafa' });
    assert.strictEqual(typeof token, 'string');
  });

  it('validateAccessToken function', () => {
    const token = generateAccessToken({ uid: 'hello123' });
    assert.strictEqual(typeof token, 'string');

    const result: any = validateAccessToken(token);
    if (result) {
      assert.strictEqual(result.uid, 'hello123');
    }
  });
});