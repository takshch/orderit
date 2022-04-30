import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../reducers/products';
import './Product.scss';
import classNames from 'classnames';
import { updateQuantity } from '../reducers/tempCart';

function Product({ id }) {
  const { loading, value } = useSelector((state) => state.products.value[id]);
  const { name, src: image, priceText } = value;
  const { quantity } = useSelector((state) => state.tempCart.products[id] || {});
  const dispatch = useDispatch();

  const setQuantity = useCallback((qty = 0) => {
    if (quantity !== 0 && qty < 0) {
      qty = 0;
    }

    if (qty >= 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  }, [quantity, id, dispatch]);

  useEffect(() => {
    if (!quantity) {
      setQuantity();
    }
  }, [quantity, setQuantity]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);

  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(loading === 'pending');
  }, [loading]);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id, dispatch]);

  const customClass = useCallback(
    (className) => classNames(className, { 'skeleton-loading': isLoading }), [isLoading]
  );

  return (
    <div className="product">
      <div className={customClass("image-wrapper")}>
        <img src={image} alt={name} className="image" />
      </div>
      <div className="name-and-price">
        <div className={customClass("name")}>{name}</div>
        <div className={customClass("price")}>{priceText}</div>
      </div>
      {!isLoading && (
        <div className="quantity-wrapper">
          <button className="change" onClick={increaseQuantity}>
            +
          </button>
          <span className="quantity">{quantity}</span>
          <button className="change" onClick={decreaseQuantity}>
            -
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
