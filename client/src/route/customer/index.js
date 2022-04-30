import React from "react";
import { useSelector } from "react-redux";
import Products from '../../components/Products';
import AddToCart from '../../components/AddToCart';
import './index.scss';

function RouteCustomerIndex() {
  const { isLoading } = useSelector((state) => state.productsIds);

  return <div className="route-customer">
    {
      isLoading ? "Loading . . . " : <Products />
    }
    <AddToCart />
  </div>;
};

export default RouteCustomerIndex;
