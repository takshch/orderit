import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../reducers/products/ids';
import Product from './Product';

function Products() {
  const { value: ids } = useSelector((state) => state.productsIds);
  const { id: shopId } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ids.length === 0 && shopId) {
      dispatch(fetchProducts(shopId)).unwrap();
    }
  }, [shopId, ids, dispatch]);

  return <>
    {
      ids.map((id, index) => <Product key={index} id={id} />)
    }
  </>;
}

export default Products;
