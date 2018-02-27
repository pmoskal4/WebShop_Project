import { combineReducers } from 'redux';
import { baseReducer } from './baseReducer.jsx';
import { cartReducer } from "./cartReducer.jsx";

//creating root reducer
const rootReducer = combineReducers({
  itemsData: baseReducer,
  cart: cartReducer
});

export default rootReducer;