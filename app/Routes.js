import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Bed as BedIcon, Home as HomeIcon } from 'styled-icons/fa-solid';

import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <div className="pane-group">
      <div className="pane-sm sidebar">
        <h5 className="nav-group-title">Favorites</h5>
        <nav className="nav-group">
          <NavLink to={routes.HOME} className="nav-group-item">
            <HomeIcon className="icon" size={18} style={{ marginTop: 2 }} />
            Dashboard
          </NavLink>
        </nav>

        <nav className="nav-group">
          <h5 className="nav-group-title">Screens</h5>
          <NavLink to={routes.ROOMS} className="nav-group-item">
            <BedIcon className="icon" size={18} style={{ marginTop: 2 }} />
            Rooms
          </NavLink>
        </nav>
      </div>
      <div className="pane">
        <Switch>
          <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </div>
    </div>
  </App>
);
