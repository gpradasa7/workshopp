import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { editReducer } from "../reducers/editReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({ editStore: editReducer });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
