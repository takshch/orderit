import React, { useState } from 'react';
import './Product.scss';

function Product({ name, image, price }) {
  let [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);

  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={image} alt={name} className="image" />
      </div>
      <div className="name-and-price">
        <div className="name">{name}</div>
        <div className="price">Rs.{price}</div>
      </div>
      <div className="quantity-wrapper">
        <button className="change" onClick={increaseQuantity}>
          +
        </button>
        <span className="quantity">{quantity}</span>
        <button className="change" onClick={decreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
}

export default Product;
