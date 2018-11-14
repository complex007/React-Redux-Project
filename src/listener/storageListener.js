import { readActivities } from '../actions/activitiesActions';

const startStorageListener = (store) => (event) => {
  if (event.key === 'activities' && event.newValue) {
    store.dispatch(readActivities());
  } else {
    return null;
  }
};

export default startStorageListener;
