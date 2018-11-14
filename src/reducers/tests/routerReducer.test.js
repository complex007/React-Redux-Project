import { replace } from '../../actions/routerActions';

import routerReducer from '../routerReducer';

describe('routerReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      route:{
        pathname: '/'
      }
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state.route;
    expect(routerReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the replace action correctly', () => {
    const expectedResult = {
      pathname: '/test'
    };
    expect(routerReducer(state.route, replace('/test'))).toEqual(expectedResult);
  });
});
