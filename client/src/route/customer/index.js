import React, { useEffect } from "react";
import Product from "../../components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../reducers/products';
import './index.scss';

function RouteCustomerIndex() {
  const { products, loading, error } = useSelector((state) => state.products);
  const { id: shopId } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0 && shopId) {
      dispatch(fetchProducts(shopId)).unwrap();
    }
  }, [shopId, products, dispatch]);

  return <div className="route-customer">
    {
      loading === 'pending' ? 'loading...' : products.map(
        (product, index) => <Product key={index} {...product} />
      )
    }
  </div>;
};

export default RouteCustomerIndex;
