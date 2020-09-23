import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch, 
    Route
 } from 'react-router-dom';
 import SCP from './scp';

 function SCPs(props) {
     let arr = props.scps;
     let newClass = 'App ' + props.class;
     
     props.changeClass(newClass)

     return(
        <div>
            <Router>
                <ol>
                    { arr.map(i => 
                        {
                            if(i.class === props.class){
                                return(<NavLink to={i.path} key={i.id}>{i.idNum}: {i.name}</NavLink>)
                            }
                        }
                    )}
                </ol>
                
                <Switch>
                    {arr.map( i =>
                        <Route path={i.path} key={i.id}>
                            <SCP 
                                name={i.name}
                                idNum={i.idNum}
                                class={i.class}
                            />
                        </Route>
                    )}
                </Switch>
            </Router>
        </div>
     );
 }

 export default SCPs;
