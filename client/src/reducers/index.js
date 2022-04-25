import { combineReducers } from 'redux';
import productsIdsReducer from './products/ids';
import productsReducer from './products';
import shopReducer from './shop';

export default combineReducers({
  productsIds: productsIdsReducer,
  products: productsReducer,
  shop: shopReducer
});
