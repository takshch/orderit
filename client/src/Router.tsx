import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteCustomerIndex from './route/customer/index';
import RouteCustomerShop from './route/customer/shop';
import RouteCheckout from './route/customer/checkout';
import RouteCart from './route/customer/cart';
import Login from './route/login';
import RouteShopIndex from './route/customer/shop/index';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RouteCustomerIndex />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shop/:shopId" element={<RouteShopIndex />}>
        <Route path="" element={<RouteCustomerShop />} />
        <Route path="checkout" element={<RouteCheckout />} />
      </Route>
      <Route path="/cart" element={<RouteCart />} />
    </Routes>
  </BrowserRouter>
);
