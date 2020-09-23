import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import Agents from './components/agents';
import {agents, scpClasses} from './dataObjects';
import SCPClasses from './components/scpClasses';

function App() {
  const [classNames, setClassNames] = useState('App Base');

  function classChange(classes) {
    setClassNames(classes);
  }
  return (
    <Router>
      <div className={classNames}>
        <header>
          <h1 className="heading">Secure Contain Protect</h1>
          <h3 className="headingMobile">Secure Contain Protect</h3>
          <h6>US - DELTA </h6>
        </header>
        <div className="navBar">
          <NavLink to="/Cryptids" activeClassName="activeLink" >Cryptids</NavLink>
          <NavLink to="/SCPs" activeClassName="activeLink" >SCPs</NavLink>
          <NavLink to="/Agents" activeClassName="activeLink">Agents</NavLink>
        </div>
        <Switch className="subNav">
          <Route path="/Cryptids">
            <Cryptids />
          </Route>
          <Route path="/SCPs">
            <SCPClasses classes={scpClasses} changeClass={classChange} />
          </Route>
          <Route path="/Agents">
            <Agents agents={agents} changeClass={classChange} />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Cryptids() {
  return (<text>Cryptids</text>);
}

export default App;