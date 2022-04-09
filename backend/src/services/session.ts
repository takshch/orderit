import { firestore, auth, serverTimestamp } from '../utils/firebase';
import { FirebaseError } from 'firebase-admin';

const usersCollection = firestore.collection('users');

const getUserByEmail = async (email: string) => {
  try {
    const UserRecord = await auth.getUserByEmail(email);
    return UserRecord;
  } catch (e: any) {
    const err: FirebaseError = e;
    if (err.code !== 'auth/user-not-found') {
      throw e;
    }
  }
};

const setUserRole = ({ uid, role }: { uid: string, role: string }) => {
  auth.setCustomUserClaims(uid, { [role]: true });
};

const createUser = async ({ email, password }: { email: string, password: string }) => {
  let UserRecord = await getUserByEmail(email);
  if (UserRecord) return;

  const { uid } = await auth.createUser({ email, password });

  // creates user document
  await usersCollection.doc(uid).set({
    email,
    createdAt: serverTimestamp(),
  });

  return uid;
};

const createUserWithRole = async ({ email, password, role }: { email: string, password: string, role: string }) => {
  const uid = await createUser({ email, password });
  if (uid) {
    await setUserRole({ uid, role });
    return uid;
  }
}

export { createUser, createUserWithRole, getUserByEmail };
