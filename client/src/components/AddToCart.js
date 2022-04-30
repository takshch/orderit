import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProducts } from '../reducers/cart';
import { removeAll } from '../reducers/tempCart';
import './AddToCart.scss';

function AddToCart() {
  const { products, hasProducts } = useSelector((state) => state.tempCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCart = useCallback(() => {
    dispatch(addProducts(products));
    dispatch(removeAll());
    navigate('/cart');
  }, [dispatch, products, navigate]);

  return (
    <div className="add-to-cart">
      {
        hasProducts && <button onClick={() => addToCart()}>Add to Cart</button>
      }
    </div>
  );
}

export default AddToCart;
