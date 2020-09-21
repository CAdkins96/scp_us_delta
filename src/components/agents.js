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
        <div className="agentContainer">
            <Router className="agentNav">
                <ol>
                    { arr.map(i => <NavLink to={i.path} key={i.id}>{i.name}</NavLink>) }
                </ol>
                
                <Switch className="agentData">
                    {arr.map( i =>
                        <Route path={i.path} >
                            <Agent 
                                name={i.name} 
                                taskforce={i.taskforce} 
                                supervisor={i.supervisor} 
                                classification={i.classification} 
                                clearance={i.clearance}
                                species={i.species}
                            />
                        </Route>
                    )}
                </Switch>
            </Router>
        </div>
    );
}

export default Agents;