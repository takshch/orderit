import { combineReducers } from 'redux';
import productsIdsReducer from './products/ids';
import productsReducer from './products';
import shopReducer from './shop';
import userReducer from './user';
import cartReducer from './cart';
import tempCartReducer from './tempCart';

export default combineReducers({
  productsIds: productsIdsReducer,
  products: productsReducer,
  shop: shopReducer,
  user: userReducer,
  cart: cartReducer,
  tempCart: tempCartReducer
});
