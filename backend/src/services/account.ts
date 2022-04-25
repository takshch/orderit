import { usersCollection } from './user';

interface ShopDetails {
  name: string;
  address: string;
}

export const writeShopDetails = async (uid: string, shopDetails: ShopDetails) => {
  const userRef = usersCollection.doc(uid);

  await userRef.set({ shop: shopDetails }, { merge: true });
};
