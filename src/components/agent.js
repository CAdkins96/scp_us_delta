import React from 'react';

function Agent(props) {
    return(
        <div className="dataText">
            <text className="dataText" >Name: {props.name}</text><br/>
            <text className="dataText" >Task Force: {props.taskforce}</text><br/>
            <text className="dataText" >Supervisor: {props.supervisor}</text><br/>
            <text className="dataText" >playbook: {props.classification}</text><br/>
            <text className="dataText" >Clearance: {props.clearance}</text><br/>
            <text className="dataText" >Species: {props.species}</text><br/>
        </div>
    );
}

export default Agent;