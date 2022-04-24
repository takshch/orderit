import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { update } from '../../reducers/shop';

function RouteCustomerShop() {
  const { shopId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (shopId) {
      dispatch(update(shopId));
      navigate('/');
    }
  }, []);

  return <></>;
}

export default RouteCustomerShop;
