import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch, 
    Route
 } from 'react-router-dom';
 import SCPs from './scps';
 import {scps} from '../dataObjects';
 import Denied from './accessDenied';

 function SCPClasses(props) {
    let arr = props.classes;
    let newClass = 'App Base';
    let access = props.access;
     
    props.changeClass(newClass)

    function canAccess(access) {
        if(access === 'Granted'){
            return(
                <div>
                    <Router basename='/SCPs'>
                        <ol className='navBar'>
                            { arr.map(
                                i => {
                                    let mobileClass='mobileNav ' + i.navPlacement;
                                    return(
                                        <NavLink to={i.path} key={i.id} className={mobileClass} activeClassName="activeLink">{i.class}</NavLink>
                                    )
                                }
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
            )
        }
        else if(access === 'Denied'){
            return (
                <div className='deniedContainer'>
                    <Denied />
                </div>
            )
        }
    }

    return(
        canAccess(access)
     );
 }

 export default SCPClasses;