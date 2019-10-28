import React, { Component, FunctionComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import Todo from './pages/TodoPage';

interface PrivateRouteProps {
  path: string
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
    )
  }

}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb : () => void ) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb,100)
  },
  signout(cb : () => void ) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb,100)
  }
}

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = (props) =>
      <Route render={({ location }) => 
        fakeAuth.isAuthenticated ? ( props.children ) : ( <Redirect to={{ pathname: "/login", state: { from: location } }}/>)
        } />

export const AuthButton = () => {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={()=> {
          fakeAuth.signout(() => history.push("/"));
        }}
        >
          Sign out
        </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
}


export const PublicPage = () => {
  return <h3>Public</h3>
}

export const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || { from: { pathname: "/" } }
  let login = () => {
    fakeAuth.authenticate( () => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>you must be logged in to view the page {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default App
