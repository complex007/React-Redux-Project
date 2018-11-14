import {
  addActivity, readActivities, readActivity, editActivity, deleteActivity
} from '../../actions/activitiesActions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import activitiesMiddleware from '../activitiesMiddleware';
chai.use(chaiEnzyme());

describe('activitiesMiddleware', () => {
  const doDispatch = () => {};
  const doGetState = () => {};
  const nextHandler = activitiesMiddleware({dispatch: doDispatch, getState: doGetState});
  it('must return a function to handle next', () => {
    chai.assert.isFunction(nextHandler);
    chai.assert.strictEqual(nextHandler.length, 1);
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
    it('read activities', () => {
      const expected = readActivities();
      const actionHandler = nextHandler(()=>expected);
      const outcome = actionHandler(expected);
      chai.assert.strictEqual(outcome, expected);
    });
    it('read activity', () => {
      let date = new Date();
      let id = date.getTime();
      const expected = readActivity(id);
      const actionHandler = nextHandler(()=>expected);
      const outcome = actionHandler(expected);
      chai.assert.strictEqual(outcome, expected);
    });
    it('add activity', () => {
      let activity = {title: 'testActivity',description: 'for test',date:new Date()};
      let newActivity = Object.assign({id:activity.date.getTime()}, activity);
      const expected = addActivity(newActivity);
      const actionHandler = nextHandler(() => expected);
      const outcome = actionHandler(expected);
      chai.assert.deepEqual(outcome, expected);
    });
    it('delete activity', () => {
      const expected = deleteActivity((new Date()).getTime());
      const actionHandler = nextHandler(() => expected);
      const outcome = actionHandler(expected);
      chai.assert.deepEqual(outcome, expected);
    });
    it('edit activity', () => {
      let date = new Date();
      let id = date.getTime();
      let activity = { id, title: 'testActivity',description: 'for test',date};
      const expected = editActivity(id,activity);
      const actionHandler = nextHandler(() => expected);
      const outcome = actionHandler(expected);
      chai.assert.deepEqual(outcome, expected);
    });

  });
  
});
