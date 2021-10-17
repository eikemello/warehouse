import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from './hooks/useAuth';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';

const PrivateRoute = ({ isPrivate, ...rest }) => {
  const { isAuthenticating, isAuthenticated } = useAuth();

  if (isAuthenticating) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <PrivateRoute isPrivate path='/dashboard' component={Dashboard} />
        {/* <Route path='/pesquisar-item' component={} /> */}
        {/* <Route path='/todos-ativos' component={} /> */}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  </>
)

export default Routes