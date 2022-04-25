import React, { useEffect } from "react";
import Product from "../../components/Product";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../reducers/products/ids';
import './index.scss';

function RouteCustomerIndex() {
  const { loading, value: ids } = useSelector((state) => state.productsIds);
  const { id: shopId } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ids.length === 0 && shopId) {
      dispatch(fetchProducts(shopId)).unwrap();
    }
  }, [shopId, ids, dispatch]);

  return <div className="route-customer">
    {
      loading === 'pending' ? 'loading...' : ids.map(
        (productId, index) => <Product key={index} id={productId} />
      )
    }
  </div>;
};

export default RouteCustomerIndex;
