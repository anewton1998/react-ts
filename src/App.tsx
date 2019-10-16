import React, { Component, FunctionComponent, ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Todo from './pages/Todo';

interface PrivateRouteParams {
  children: ReactNode,
  rest: { [x: string]: any }
}

class App extends Component<{}> {

  render() {
    return (
      <Router>
        <div>
          <AuthButton/>

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <Todo />
            </PrivateRoute>
          </Switch>

        </div>
      </Router>
    );
  }


}

export const PrivateRoute: FunctionComponent<PrivateRouteParams> = (params) =>
      <Route {...params.rest} render={({ location }) => 
        fakeAuth.isAuthenticated ? ( params.children ) : ( <Redirect to={{ pathname: "/login", state: { from: location } }}/>)
        } />


export default App;
