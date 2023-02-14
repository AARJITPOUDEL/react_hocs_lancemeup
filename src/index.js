import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Authorization from './authorization'
import RequireAuthentication from './require-authentication'
import AdminRoute from './admin-route';
import Home from './home';

function App() {
  const Admin = Authorization(['admin']);
  const MyAdminRoute = RequireAuthentication(Admin(AdminRoute));

  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={MyAdminRoute} />
      </Fragment>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
