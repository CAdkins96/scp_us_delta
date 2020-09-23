import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch, 
    Route
 } from 'react-router-dom';
 import SCPs from './scps';
 import {scps} from '../dataObjects';

 function SCPClasses(props) {
    let arr = props.classes;
    let newClass = 'App Base'
     
    props.changeClass(newClass)

     return(
        <div>
            <Router basename='/SCPs'>
                <ol >
                    { arr.map(i => 
                        <NavLink to={i.path} key={i.id} >{i.class}</NavLink>
                    )}
                </ol>
                
                <Switch>
                    {arr.map( i =>
                        <Route path={i.path} key={i.id}>
                            <SCPs 
                                scps={scps}
                                class={i.class}
                                changeClass={props.changeClass}
                            />
                        </Route>
                    )}
                </Switch>
            </Router>
        </div>
     );
 }

 export default SCPClasses;