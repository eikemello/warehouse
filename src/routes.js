import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ isPrivate, ...rest }) => {
  // const { isLoading, isAuthenticated } = useContext(AuthContext);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route path='/' exact component={() => <h1>Login</h1> } />
        <PrivateRoute isPrivate path='/dashboard' component={() => <h1>Dashboard</h1>} />
        {/* <Route path='/pesquisar-item' component={} /> */}
        {/* <Route path='/todos-ativos' component={} /> */}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>
  </>
)

export default Routes