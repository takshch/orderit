import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddToCart from '../../components/AddToCart';
import Products from '../../components/Products';
import { update } from '../../reducers/shop';

function RouteCustomerShop() {
  const { shopId } = useParams();
  const { isLoading } = useSelector((state) => state.productsIds);
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopId) {
      dispatch(update(shopId));
    }
  }, [shopId, dispatch]);

  return (<>
    {
      isLoading ? "Loading . . . " : <Products />
    }
    <AddToCart />
  </>);
}

export default RouteCustomerShop;
