import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './history';

import { useAuth } from './hooks/useAuth';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Searchs from './pages/Search';
import Equipments from './pages/Equipments';

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
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Login} />
        <PrivateRoute isPrivate path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/searchs' component={Searchs} /> 
        <PrivateRoute path='/all-equipments' component={Equipments} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  </>
)

export default Routes