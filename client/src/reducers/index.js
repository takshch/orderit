import { combineReducers } from 'redux';
import productsIdsReducer from './products/ids';
import productsReducer from './products';
import shopReducer from './shop';
import userReducer from './user';

export default combineReducers({
  productsIds: productsIdsReducer,
  products: productsReducer,
  shop: shopReducer,
  user: userReducer,
});
