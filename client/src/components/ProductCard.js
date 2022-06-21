import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCard.scss';

function ProductCard({ id, quantity }) {
  const { value } = useSelector((state) => state.products.value[id]);
  const { name, src: image, priceText } = value;

  return (
    <div className="product-card">
      <div className="image-and-name">
        <div className="image-wrapper">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="price-and-quantity">
        <div className="price">{priceText}</div>
        <div className="quantity">x{quantity}</div>
      </div>
    </div>
  );
}

export default ProductCard;
