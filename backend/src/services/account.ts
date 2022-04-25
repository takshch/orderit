import { getUserData, usersCollection } from './user';

interface ShopDetails {
  name: string;
  address: string;
}

export const writeShopDetails = async (uid: string, shopDetails: ShopDetails) => {
  const userRef = usersCollection.doc(uid);

  await userRef.set({ shop: shopDetails }, { merge: true });
};

export const getShopDetails = async (uid: string) => {
  const userData = await getUserData(uid);

  if (typeof userData === 'object') {
    const { shop } = userData;
    return shop;
  };
};
