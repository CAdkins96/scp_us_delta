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
            <Router>
                <ol className="dataNav">
                    { arr.map(i => <NavLink activeClassName="activeNav" to={i.path} key={i.id}>{i.fullName}</NavLink>)}
                </ol>
                <ol className="dataNavMobile">
                    { arr.map(i => <NavLink activeClassName="activeNav" to={i.path} key={i.id}>{i.abvName}</NavLink>)}
                </ol>
                
                <Switch>
                    {arr.map( i =>
                        <Route path={i.path} key={i.id}>
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