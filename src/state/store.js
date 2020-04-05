import { applyMiddleware, combineReducers, createStore } from 'redux';

// For tracking performance, enter the query string "?react_perf"
// in the localhost URL

// Put ?debug_session=___ at end of url to persist data in redux devtools
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { default as createLogger } from './middlewares/logger';
import * as reducers from './ducks';
import { LOG_OUT } from './ducks/user/types';

// When dispatching an action, all our middleware stack has the option of
// interacting with it before the action gets to Reducers.

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) state = undefined;
  return combineReducers(reducers)(state, action);
};


export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( thunk, createLogger ))
);

