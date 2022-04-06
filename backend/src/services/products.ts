import firestore from '../utils/firestore';
import UUID from '../utils/uuid';

const { assign } = Object;

const productsCollection = firestore.collection('products');

const createProduct = async ({ name, price, src }: { name: string; price: number, src?: string }) => {
  const data = { name, price, src };

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
  if (doc.exists) {
    const { name, price, src }: any = doc.data();
    return { name, price, src };
  }
};

export { createProduct, fetchProduct };
