import React    from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

import store from './store';

import App      from './app/components/App';
import Login    from './app/components/auth/Login';
import Register from './app/components/auth/Register';
import Travolta from './app/components/Travolta';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="login" component={Login} />
    </Route>
    <Route path="/register" component={Register} />
    <Route path="*" component={Travolta} />
  </Router>
);

render(<Provider store={store}>{router}</Provider>,  document.getElementById('picto-io'));
