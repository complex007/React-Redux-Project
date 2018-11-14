import { REPLACE } from './actionsTypes';

export const replace = (href) => ({
  type: REPLACE,
  payload: href
});
