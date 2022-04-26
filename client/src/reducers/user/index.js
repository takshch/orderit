import { combineReducers } from "redux";
import authenticationReducer from "./authentication";

const userReducer = combineReducers({
  authentication: authenticationReducer,
});

export default userReducer;
