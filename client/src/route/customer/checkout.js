import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';

function RouteCheckout() {
  const { products: productsAdded } = useSelector((state) => state.cart);
  const { value: products } = useSelector((state) => state.products);
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    const entries = Object.entries(productsAdded);
    const arr = entries.map(([id, contents]) => ({ id, ...contents }));

    setProductsArr(arr);
  }, [productsAdded, products]);

  return (
    <div className="route-checkout">
      {
        productsArr.map(({ id, quantity }, index) => <ProductCard key={index} id={id} quantity={quantity} />)
      }
    </div>
  );
}

export default RouteCheckout;
