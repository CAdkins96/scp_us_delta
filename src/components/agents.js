import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch, 
    Route
 } from 'react-router-dom';
 import Agent from './agent';

function Agents(props) {
    var arr = props.agents;

    return(
        <div>
            <Router className="agentNav">
                <ol>
                    { arr.map(i => <NavLink to={i.path} key={i}>{i.name}</NavLink>) }
                </ol>
                
                <Switch>
                    <Route path="/AgentRose">
                        <Agent name="Axel Rose" tf="Cryptid Rogue" sup="Agent Leeds" class="Wronged" clear="Cryptid" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Agents;