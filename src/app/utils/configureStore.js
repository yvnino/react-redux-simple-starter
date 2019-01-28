
import { createLogger } from 'redux-logger';
import { apiMiddleware } from 'middleware/api';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers/index';

const enhancer = compose(applyMiddleware(
  apiMiddleware,
  createLogger({ collapsed: true })
));

export const store = createStore(rootReducer, enhancer);

export function configureStore() {
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index').default;
      
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
