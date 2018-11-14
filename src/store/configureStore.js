import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import routerMiddleware from '../middleware/routerMiddleware';
import activitiesMiddleware from '../middleware/activitiesMiddleware';
import thunk from 'redux-thunk';

const configureStore = (initialState, history) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(routerMiddleware(history), thunk, activitiesMiddleware)
  )
  return store
};
export default configureStore;
