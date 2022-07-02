import { RequestHandler } from "express";
import { fetchProductsByIds } from "../services/products";

const TAX_PERCENTAGE = 5;

interface ProductTotal {
  id: string;
  name: string;
  src?: string;
  price: number;
  quantity: number;
  total: number;
};

const orderQuote: RequestHandler = async (req, res) => {
  const { products } = req.body;

  const ids = products.map(({ id }: { id: string }) => id);

  try {
    const productsData = await fetchProductsByIds(ids);

    const sub: Array<ProductTotal> = [];

    productsData.forEach(({ id, name, src, price }) => {
      const product = products.find(
        ({ id: idx }: { id: string }) => idx === id
      );

      if (product) {
        const { quantity } = product;
        const total = parseFloat((quantity * price).toFixed(2));

        sub.push({ id, name, src, price, quantity, total });
      }
    });

    let subtotal = 0;
    sub.forEach(({ total }) => {
      subtotal = subtotal + total;
    });

    const tax = parseFloat(
      ((subtotal / 100) * TAX_PERCENTAGE).toFixed(2)
    );

    const total = parseFloat(
      (subtotal + tax).toFixed(2)
    );

    res.status(200).send({ sub, subtotal, tax, taxPercentage: TAX_PERCENTAGE, total });
  } catch (err) {
    res.boom.badImplementation();
  }
};

export { orderQuote };
