import { firestore } from '../utils/firebase';

const usersCollection = firestore.collection('users');

const getUserData = async (uid: string) => {
  const ref = usersCollection.doc(uid);

  const doc = await ref.get();
  if (doc.exists) {
    return doc.data();
  }
};

export { getUserData };
