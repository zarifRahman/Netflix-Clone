import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import IsUserRedirect, { ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Browse, Signin, Signup } from './pages';
import Home from './pages/home';

export default function App() {
  const user = useAuthListener();
  
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <Signin />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <Signup />
          </IsUserRedirect>
        </Route>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}