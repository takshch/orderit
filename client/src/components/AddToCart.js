import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProducts } from '../reducers/cart';
import { removeAll } from '../reducers/tempCart';
import './AddToCart.scss';
import Render from './Render';

function AddToCart({ shopId }) {
  const { products, hasProducts } = useSelector((state) => state.tempCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = useCallback(() => {
    dispatch(addProducts(products));
    dispatch(removeAll());
    navigate(`/shop/${shopId}/checkout`);
  }, [dispatch, products, navigate, shopId]);

  return (
    <div className="add-to-cart">
      <Render when={hasProducts} fallback={<></>}>
        <button onClick={() => addToCart()}>Add to Cart</button>
      </Render>
    </div>
  );
}

export default AddToCart;
