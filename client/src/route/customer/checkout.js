import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function RouteCheckout() {
  const { products } = useSelector((state) => state.cart);
  const [productsArr, setProductsArr] = useState([]);

  useEffect(() => {
    const entries = Object.entries(products);
    const arr = entries.map(([id, contents]) => ({ id, ...contents }));
    setProductsArr(arr);
  }, [products]);

  return (
    <div className="route-checkout">
      Hello world
      {
        productsArr.map((product) => console.log(product))
      }
    </div>
  );
}

export default RouteCheckout;
