import * as admin from 'firebase-admin';
import config from 'config';

const firebaseConfig: Object = config.get('firebase');

if (!firebaseConfig) {
  const currentNodeEnv = process.env.NODE_ENV;
  throw new Error(`Firebase config does not exists in config/${currentNodeEnv} file.`);
}

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});

const firestore = admin.firestore();

export default firestore;