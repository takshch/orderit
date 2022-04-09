import * as assert from 'assert';
import { getUserByEmail, createUser } from '../../src/services/session';
import { firestore } from '../../src/utils/firebase';


describe('auth service', () => {
  it('getUserByEmail function', async () => {
    const UserRecord = await getUserByEmail('user@example.com');

    // checks user does not exists;
    assert.strictEqual(UserRecord, undefined);
  });

  it('createUser function', async () => {
    const data = { email: 'foo@example.com', password: 'hello123' };
    const uid = await createUser(data);
    assert.ok(uid , 'user identifier should be returned');

    const doc = await firestore.collection('users').doc(uid).get();
    assert.ok(doc.exists, 'user document must exists');
  });
});
