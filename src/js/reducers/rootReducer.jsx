import { combineReducers } from 'redux';
import { baseReducer } from './baseReducer.jsx';

//creating root reducer
const rootReducer = combineReducers({
  base: baseReducer
});

export default rootReducer;