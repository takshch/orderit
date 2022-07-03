import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductQuantities from '../../components/ProductQuantities';
import { getQuoteByQuantities } from '../../services/order';
import useRequest from '../../hooks/useRequest';
import OrderDetails from '../../components/QuoteDetails';
import './checkout.scss';

function RouteCheckout() {
  const { products } = useSelector((state) => state.cart);
  const { data, sendRequest } = useRequest();

  useEffect(() => {
    const entries = Object.entries(products);
    const productQuantities = entries.map(([id, { quantity }]) => ({ id, quantity }));

    if (productQuantities.length !== 0) {
      sendRequest(getQuoteByQuantities, productQuantities);
    }
  }, [products, sendRequest]);

  return (
    <div className="route-checkout">
      {
        data && data.sub && <ProductQuantities products={data.sub} />
      }
      {
        data && (
          <OrderDetails
            subtotal={data.subtotal}
            tax={data.tax}
            taxPercentage={data.taxPercentage}
            total={data.total}
          />
        )
      }
    </div>
  );
}

export default RouteCheckout;
