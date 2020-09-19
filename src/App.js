import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Secure Contain Protect</h1>
          <h6>US - DELTA </h6>
        </header>
        <div className="navBar">
          <NavLink to="/Cryptids" activeClassName="activeLink">Cryptids</NavLink>
          <NavLink to="/SCPs" activeClassName="activeLink">SCPs</NavLink>
          <NavLink to="/Agents" activeClassName="activeLink">Agents</NavLink>
        </div>
        <Switch>
          <Route path="/Cryptids">
            <Cryptids />
          </Route>
          <Route path="/SCPs">
            <SCPs />
          </Route>
          <Route path="/Agents">
            <Agents />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Cryptids() {
  return <text>Cryptids</text>;
}

function SCPs() {
  return <text>SCPs</text>;
}

function Agents() {
  return <text>Agents</text>;
}

export default App;
