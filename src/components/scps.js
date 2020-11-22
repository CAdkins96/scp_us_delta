import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch, 
    Route
 } from 'react-router-dom';
 import SCP from './scp';
 import Creature from './creature';

 function SCPs(props) {
     let arr = props.scps;
     let newClass = 'App ' + props.class;
     let baseURL = '/SCPs/' + props.class;
     
     props.changeClass(newClass)

     return(
        <div>
            <Router basename={baseURL}>
                <ol>
                    { arr.map(i => 
                        {
                            if(i.class === props.class){
                                return(<NavLink to={i.path} key={i.id} activeClassName="activeLink">{i.idNum}: {i.name}</NavLink>)
                            }
                        }
                    )}
                </ol>
                
                <Switch>
                    {arr.map( i =>
                        <Route path={i.path} key={i.id}>
                            <Creature 
                                name={i.name}
                                idNum={i.idNum}
                                class={i.class}
                                type='SCP'
                            />
                        </Route>
                    )}
                </Switch>
            </Router>
        </div>
     );
 }

 export default SCPs;
