import React    from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  hashHistory,
} from 'react-router';

import store from './store';

import App      from './app/components/App';
import Home     from './app/components/Home';
import Auth     from './app/components/Auth';
import Login    from './app/components/auth/Login';
import Register from './app/components/auth/Register';
import Travolta from './app/components/Travolta';

let indexRoute = localStorage.getItem('__pictoUser') ?
  (<IndexRoute component={Home} />)
  :
  (<IndexRedirect to="/auth/login" />);


const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            {indexRoute}
        </Route>
        <Route path="auth" component={Auth}>
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
        </Route>
        <Route path="*" component={Travolta} />
    </Router>
);

render(<Provider store={store}>{router}</Provider>,  document.getElementById('picto-io'));
