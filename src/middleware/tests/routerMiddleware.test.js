import { replace } from '../../actions/routerActions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import routerMiddleware from '../routerMiddleware';
import { createBrowserHistory } from 'history';

chai.use(chaiEnzyme());
const history = createBrowserHistory();

describe('routerMiddleware', () => {
  const nextHandler = routerMiddleware(history)(()=>{});
  it('must return a function to handle next', () => {
    let actionHandler = nextHandler();
    chai.assert.isFunction(actionHandler);
    chai.assert.strictEqual(actionHandler.length, 1);
  });
  describe('handle next', () => {
    it('must return a function to handle action', () => {
      const actionHandler = nextHandler();
      chai.assert.isFunction(actionHandler);
      chai.assert.strictEqual(actionHandler.length, 1);
    });
    describe('handle action', () => {
      it('must pass action to next if not a function', done => {
        const actionObj = {};
        const actionHandler = nextHandler(action => {
          chai.assert.strictEqual(action, actionObj);
          done();
        });
        actionHandler(actionObj);
      });
    });
    it('REPLACE', () => {
      const expected = replace('/test');
      const actionHandler = nextHandler(()=>expected);
      const outcome = actionHandler(expected);
      chai.assert.strictEqual(outcome, expected);
    });
  });
  
});
