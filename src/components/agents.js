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
    let newClass = 'App Base';

    props.changeClass(newClass);

    

    return(
        <div>
            <Router basename='/Agents'>
                <ol className="dataNav">
                    { arr.map(i => <NavLink to={i.path} key={i.id} className={i.navPlacement} activeClassName="activeLink">{i.fullName}</NavLink>)}
                </ol>
                <ol className="dataNavMobile">
                    { arr.map(
                        i => {
                            let mobileClass = 'mobileNav ' + i.navPlacement
                            return(
                                <NavLink to={i.path} key={i.id} className={mobileClass} activeClassName="activeLink">{i.abvName}</NavLink>
                            )
                        }
                    )
                    }
                </ol>
                <Switch>
                    {arr.map( i =>
                        <Route path={i.path} key={i.id}>
                            <Agent 
                                name={i.fullName} 
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