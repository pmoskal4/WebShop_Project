import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/rootReducer.jsx"

const logger = createLogger();

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

export default store;
