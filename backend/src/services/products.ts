import { firestore, FieldValue } from '../utils/firebase';
import UUID from '../utils/uuid';

const { assign } = Object;

const productsCollection = firestore.collection('products');
const usersCollection = firestore.collection('users');

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

  const productRef = productsCollection.doc(UUID());
  const userRef = usersCollection.doc(owner);

  await firestore.runTransaction(async (transaction) => {
    transaction.create(productRef, data);

    // adds product id to users document
    transaction.update(userRef, {
      products: FieldValue.arrayUnion(productRef.id),
    });
  });

  return productRef.id;
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

const deleteProduct = async (id: string, owner: string) => {
  const ref = productsCollection.doc(id);
  const doc = await ref.get();

  const data = doc.data();
  if(doc.exists && data) {
    const { owner: uid } = data;
    // deletes product doc
    // if user owns the product
    if(uid === owner) {
      await ref.delete();
      return true;
    }
  }
};

export { createProduct, fetchProduct, deleteProduct };
