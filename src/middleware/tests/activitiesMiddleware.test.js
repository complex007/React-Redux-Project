import {
  addActivity, readActivities, readActivity, editActivity, deleteActivity
} from '../../actions/activitiesActions';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import activitiesMiddleware from '../activitiesMiddleware';


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
    describe(' there is  no activities in store', () => {
      let activity = {title: 'testActivity',description: 'for test',date:new Date()};
      let newActivity = Object.assign({id:activity.date.getTime()}, activity);
      let id = activity.date.getTime();
      it('read activities', () => {
        const expected = readActivities();
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
      });
      it('read activity', () => {
        const expected = readActivity(id);
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
      });
      it('edit activity', () => {
        let editedActivity = { id, title: 'testActivity edit',description: 'for test',date:new Date()};
        const expected = editActivity(id,editedActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('delete activity', () => {
        const expected = deleteActivity(id);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('add activity', () => {
        const expected = addActivity(newActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        id = outcome.id;
        chai.assert.deepEqual(outcome, expected);
      });
    });
    describe(' there is activities in store', () => {
      let activity = {title: 'testActivity',description: 'for test',date:new Date()};
      let newActivity = Object.assign({id:activity.date.getTime()}, activity);
      let id;
      it('read activities', () => {
        const expected = readActivities();
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
        id = outcome.activities[0].id;
      });

      it('add activity', () => {
        const expected = addActivity(newActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('add activity', () => {
        const expected = addActivity(newActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('read activities', () => {
        const expected = readActivities();
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
      });
      it('read activity', () => {
        const expected = readActivity(id);
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
      });
      it('read activity', () => {
        const expected = readActivity(0);
        const actionHandler = nextHandler(()=>expected);
        const outcome = actionHandler(expected);
        chai.assert.strictEqual(outcome, expected);
      });
      it('edit activity', () => {
        let editedActivity = { id, title: 'testActivity edit',description: 'for test',date:new Date()};
        const expected = editActivity(id,editedActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('edit activity', () => {
        let editedActivity = { id, title: 'testActivity edit',description: 'for test',date:new Date()};
        const expected = editActivity(0,editedActivity);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('delete activity', () => {
        const expected = deleteActivity(id);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
      it('delete activity', () => {
        const expected = deleteActivity(0);
        const actionHandler = nextHandler(() => expected);
        const outcome = actionHandler(expected);
        chai.assert.deepEqual(outcome, expected);
      });
    });
  });
  
});
