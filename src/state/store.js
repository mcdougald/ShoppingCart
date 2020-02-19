import { applyMiddleware, combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { default as createLogger } from './middlewares/logger';
import * as reducers from './ducks';
import { LOG_OUT } from './ducks/user/types';


const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) state = undefined;
  return combineReducers(reducers)(state, action);
};


export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( createLogger ))
);

