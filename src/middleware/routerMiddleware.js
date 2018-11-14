
import { REPLACE } from '../actions/actionsTypes';

const routerMiddleware = (history) => () => (next) => (action) => {
  switch (action.type) {
    case REPLACE:
      history.replace(action.payload);
      return next(action);
    default:
      return next(action);
  }
};
export default routerMiddleware;
