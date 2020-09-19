import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import './App.css';
import Agents from './components/agents';
import Agent from './components/agent';
import axios from 'axios';
import Modal from 'react-modal';

var querystring = require('querystring');


function App() {
  const [name, setProp, playbook, clearance, supervisor, taskforce, species] = useState('');
  // var name =  '';
  // var playbook= '';
  // var clearance= '';
  // var supervisor= '';
  // var taskforce= '';
  // var species= '';
  var modalIsOpen = false;
  var messageFromServer = "";
  

  function openModal() {
    modalIsOpen = true;
  }

  function closeModal() {
    
    modalIsOpen= false;
  }

  function insertNewAgent(e) {
    axios.post('/agent',
      querystring.stringify({
        name: name,
        playbook: playbook,
        supervisor: supervisor,
        clearance: clearance,
        taskForce: taskforce,
        species: species
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(res) {
      e.setState({
        messageFromServer: res.data
      });
    });
  }

  
  function myOnClick() {
    axios({
      method: 'post',
      url: 'localhost:8080/agent',
      data: {
        name: name,
        classification: playbook,
        clearance: clearance,
        taskForce: taskforce,
        species: species
      }
    })
    
  }

  function Add() {
  //   function handleTextChange(e) {
  //     if (e.target.name === "name") {
  //         name = e.target.value
  //     }
  //     else if (e.target.name === "playbook") {
  //         playbook = e.target.value
  //     }
  //     else if (e.target.name === "clearance") {
  //         clearance = e.target.value
  //     }
  //     else if (e.target.name === "supervisor") {
  //         supervisor = e.target.value
  //     }
  //     else if (e.target.name === "taskforce") { 
  //         taskforce = e.target.value
  //     }
  //     else if (e.target.name === "species") {
  //         species = e.target.value
  //     }
  //   }
    if(messageFromServer === '') {
      return(
        <div>
          <button onClick={openModal()} >+</button>
          <Modal 
            isOpen = {modalIsOpen}
            onRequestClose={closeModal()}
            contentLabel="Add Agent" className="Modal">
            
            <Link to="/">
              <button onClick={closeModal()}>x</button>
            </Link><br/>

            <fieldset>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' value={name} onChange={e => setProp(e.target.value)} /*(onChange={handleTextChange()}*/></input>
              <label htmlFor='playbook'>playbook:</label>
              <input type='text' id='playbook' value={playbook} onChange={e => setProp(e.target.value)} /*(onChange={handleTextChange()}*/></input>
              <label htmlFor='clearance'>Clearance:</label>
              <input type='text' id='clearance' value={clearance} onChange={e => setProp(e.target.value)} /*(onChange={handleTextChange()}*/></input>
              <label htmlFor='supervisor'>Supervisor:</label>
              <input type='text' id='supervisor' value={supervisor} onChange={e => setProp(e.target.value)} /*(onChange={handleTextChange()}*/></input>
              <label htmlFor='taskforce'>Task Force:</label>
              <input type='text' id='taskforce' value={taskforce} onChange={e => setProp(e.target.value)} /*(onChange={handleTextChange()}*/></input>
              <label htmlFor='species'>Species:</label>
              <input type='text' id='species' value={species} onChange={e => setProp(e.target.value)}  /*(nChange={handleTextChange()}*/></input>
            </fieldset>
            <button onClick={myOnClick()}>Add New Agent</button>
          </Modal>
        </div>
      );
    } else {
        return (
          <div>
            <button onClick={openModal()}>+</button>
            <Modal 
            isOpen = {modalIsOpen()}
            onRequestClose={closeModal()}
            contentLabel="Add Agent" className="Modal">
              <h3>{messageFromServer}</h3>
              <Link to="/">
                <button onClick={closeModal()}>x</button>
              </Link><br/>
            </Modal>
          </div>
        );
    }
  }

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
        <Switch className="subNav">
          <Route path="/Cryptids">
            <Cryptids />
          </Route>
          <Route path="/SCPs">
            <SCPs />
          </Route>
          <Route path="/Agents">
            <Agents agents={[{name: "Axel Rose", path: "/AgentRose"}, {name: "Peter", path: "/AgentPeter"}]} />
          </Route>
          <Route path="/">
            { Add() }
          </Route>
          <Route path="/AgentRose">
            <Agent name="Axel Rose" tf="Cryptid Rogue" sup="Agent Leeds" class="Wronged" clear="Cryptid" />
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

export default App;
