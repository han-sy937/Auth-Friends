import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Login from './components/Login';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/protected">Friends</Link></li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
