import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { store } from './store';
import reportWebVitals from './reportWebVitals';

// route components
import RouteCustomerIndex from './route/customer/index';
import RouteCustomerShop from './route/customer/shop';
import RouteCheckout from './route/customer/checkout';
import RouteCart from './route/customer/cart';
import Login from './route/login';
import RouteShopIndex from './route/customer/shop';

const container = document.getElementById('root');
const root = createRoot(container);

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RouteCustomerIndex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop/:shopId/" element={<RouteShopIndex />}>
              <Route path="" element={<RouteCustomerShop />} />
              <Route path="checkout" element={<RouteCheckout />} />
            </Route>
            <Route path="/cart" element={<RouteCart />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
