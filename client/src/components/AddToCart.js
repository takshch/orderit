import React from 'react';
import { useSelector } from 'react-redux';
import './AddToCart.scss';

function AddToCart() {
  const { hasProducts } = useSelector((state) => state.tempCart);

  return (
    <div className="add-to-cart">
      {
        hasProducts && <button>Add to Cart</button>
      }
    </div>
  );
}

export default AddToCart;
