import React from "react";
import "./Product.scss";

function Product({ name, src, quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="product">
      <div className="image-wrapper">
        <img src={src} description={name} className="image" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity-wrapper">
        <button className="change" onClick={increaseQuantity}>+</button>
        <span className="quantity">{quantity}</span>
        <button className="change" onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
};

export default Product;
