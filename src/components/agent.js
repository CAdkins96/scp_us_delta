import React from 'react';

function Agent(props) {
    return(
        <div>
            <text>Name: {props.name}</text>
            <text>Task Force: {props.tf}</text>
            <text>Supervisor: {props.sup}</text>
            <text>playbook: {props.class}</text>
            <text>Clearance: {props.clear}</text>
        </div>
    );
}

export default Agent;