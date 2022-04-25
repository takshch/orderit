import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../reducers/products';
import './Product.scss';
import classNames from 'classnames';

function Product({ id }) {
  const { loading, value } = useSelector((state) => state.products.value[id]);
  const { name, src: image, priceText } = value;
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(0);
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
