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
const auth = admin.auth();

const serverTimestamp = () => admin.firestore.FieldValue.serverTimestamp();
const FieldValue = admin.firestore.FieldValue;

export { firestore, auth, serverTimestamp, FieldValue };
