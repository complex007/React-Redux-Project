import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import * as actions from '../../actions/actionsTypes';
import {
  readActivities
} from '../../actions/activitiesActions';
import StorageListener from '../storageListener';

chai.use(chaiEnzyme());
describe('Storage Listener', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  describe(' no changes of activities', () => {
    let mockEvent = {
      key:"activities",
      newValue:null
    };
    const nextHandler = StorageListener({dispatch: doDispatch, getState: doGetState, event: mockEvent});
    it('must return a function to handle next', () => {
      chai.assert.isFunction(nextHandler);
      chai.assert.strictEqual(nextHandler.length, 1);
    });
    describe('handle action', () => {
      it('must return null if no changes', () => {
        const actionResult = nextHandler(mockEvent);
        chai.assert.isNull(actionResult);
      });
    });
  });
  describe('activities are changed', () => {
    let mockEvent = {
      key:"activities",
      newValue: true
    };
    const dispatch = jest.fn();
    const nextHandler = StorageListener({dispatch: dispatch, getState: doGetState, event: mockEvent});
    it('must return a function to handle next', () => {
      chai.assert.isFunction(nextHandler);
      chai.assert.strictEqual(nextHandler.length, 1);
    });
    describe('handle action', () => {
      it('must return null if no changes', () => {
        nextHandler(mockEvent);
        expect(dispatch).toHaveBeenCalledWith(readActivities());
      });
    });
  });
});