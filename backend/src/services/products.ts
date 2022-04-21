import { firestore } from '../utils/firebase';
import UUID from '../utils/uuid';

const { assign } = Object;

const productsCollection = firestore.collection('products');

interface ProductType {
  name: string;
  price: number;
  src?: string;
  owner: string;
};

const createProduct = async ({ name, price, src, owner }: ProductType) => {
  const data = { name, price, src, owner };

  // src is optional
  // if src is not provided then it will be blank string
  if (!data.src) {
    assign(data, { src: '' });
  }

  const ref = productsCollection.doc(UUID());
  await ref.set(data);

  return ref.id;
};

const fetchProduct = async (id: string) => {
  const ref = productsCollection.doc(id);

  const doc = await ref.get();
  const data = doc.data();
  if (doc.exists && data) {
    const { name, price, src } = data;
    return { name, price, src };
  }
};

export { createProduct, fetchProduct };
