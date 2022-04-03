import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../reducers/products';
import './index.scss';

function RouteCustomerIndex() {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect( () => {
    if(products.length === 0) {
      dispatch(fetchProducts()).unwrap()
    }
  }, []);

  return <div className="route-customer">
    {
      loading === 'pending' ? 'loading...' : products.map(
        (product, index) => <Product key={index} { ...product } />
      )
    }
  </div>;
};

export default RouteCustomerIndex;
