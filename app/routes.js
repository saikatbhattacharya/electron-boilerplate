import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Launcher from './containers/Launcher';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Launcher} />
  </Route>
);

// <Route path="loggedin" component={LoggedInPage} />