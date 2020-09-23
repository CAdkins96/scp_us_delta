import React from 'react';

function SCP(props) {
    return(
        <div className="dataText">
            <text className="firstAgent" >Name: {props.name}</text><br/><br/>
            <text className="data" >ID: {props.idNum}</text><br/><br/>
            <text className="data" >Class: {props.class}</text><br/><br/>
        </div>
    );
}

export default SCP;