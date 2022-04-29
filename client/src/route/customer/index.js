import React from "react";
import { useSelector } from "react-redux";
import Products from '../../components/Products';
import './index.scss';

function RouteCustomerIndex() {
  const { isLoading } = useSelector((state) => state.productsIds);

  return <div className="route-customer">
    {
      isLoading ? "Loading . . . " : <Products />
    }
  </div>;
};

export default RouteCustomerIndex;
