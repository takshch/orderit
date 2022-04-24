import { combineReducers } from 'redux';
import productsReducer from './products';
import shopReducer from './shop';

export default combineReducers({
  products: productsReducer,
  shop: shopReducer
});
