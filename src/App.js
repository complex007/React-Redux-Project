import React from 'react';
import { Provider } from 'react-redux';
import {
  Router, Route, Link, Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import startStorageListener from './listener/storageListener';
import ForecastWeather from './containers/ForecastWeather';
import ActivityList from './containers/ActivityList';
import ActivityForm from './containers/ActivityForm';
import initialState from './store/initialState';
import configureStore from './store/configureStore';
const history = createBrowserHistory({basename:process.env.PUBLIC_URL});
const store = configureStore(initialState, history);

// sync localstorage across tabs
if (window.addEventListener) {
  window.addEventListener('storage', startStorageListener(store));
}
const App = () => (
  <Provider store={store}>
    <div className="App">
      <div>
        <Router history={history}>
          <div>
            <nav className="nav-bar indigo lighten-1">
              <div className="nav-wrapper">
              <ul id="nav-mobile" className="left">
                  <li><Link to={'/weather'}>ForecastWeather</Link></li>
                  <li><Link to={'/activity'}>Activity</Link></li>
              </ul>
              </div>
            </nav>
            <Switch>
              <Route exact path={'/'} component={ForecastWeather} />
              <Route exact path={'/weather'} component={ForecastWeather} />
              <Route exact path={'/activity'} component={ActivityList} />
              <Route exact path={'/activity/new'} component={ActivityForm} />
              <Route exact path={'/activity/:id'} component={ActivityForm} />
              <Route component={ForecastWeather} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  </Provider>
);
export default App;
