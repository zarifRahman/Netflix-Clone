import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Signin, Signup } from './pages';
import Home from './pages/home';

export default function App() {
  return (
    <Router>
      <Route exact path='/signin'>
        <Signin />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route path='user'>
        <p>Hello i am a user</p>
      </Route>
    </Router>
  );
}