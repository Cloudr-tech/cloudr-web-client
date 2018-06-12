import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './views/Login/Login';
import NotFound from './views/Error/NotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
  , document.getElementById('root'),
);
registerServiceWorker();
