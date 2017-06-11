import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { persistState }         from 'redux-devtools';
import { routerReducer }        from 'react-router-redux';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import * as reducers            from '../modules/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, loggerMiddleware), // logger after thunk to avoid undefined actions
  persistState(getDebugSessionKey()),
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

// combine reducers -> createStore reducer
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  // checks if webpack HMR:
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }

  return store;
}
