import React from 'react';

function Agent(props) {
    return(
        <div className="dataText">
            <text className="firstAgent" >Name: {props.name}</text><br/><br/>
            <text className="data" >Task Force: {props.taskforce}</text><br/><br/>
            <text className="data" >Supervisor: {props.supervisor}</text><br/><br/>
            <text className="data" >Position: {props.classification}</text><br/><br/>
            <text className="data" >Clearance: {props.clearance}</text><br/><br/>
            <text className="data" >Species: {props.species}</text><br/><br/>
        </div>
    );
}

export default Agent;