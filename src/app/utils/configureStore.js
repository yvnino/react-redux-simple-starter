
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

const enhancer = compose(applyMiddleware(thunk, createLogger({ collapsed: true })));
const store = createStore(rootReducer, enhancer);

export function configureStore() {
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index').default;
      
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
