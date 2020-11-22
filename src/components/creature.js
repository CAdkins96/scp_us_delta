import React from 'react';

function Creature(props) {
    let type = props.type;

    function creature(creatureType){
        if(creatureType === 'Cryptid') {
            return (
                <div className="dataText">
                    <text className="firstAgent" >Name: {props.name}</text><br/><br/>
                    <text className="data" >Description: {props.idNum}</text><br/><br/>
                    <text className="data" >Powers: {props.class}</text><br/><br/>
                    <text className="data" >Abilities: {props.class}</text><br/><br/>
                    <text className="data" >Weaknesses: {props.class}</text>
                </div>
            );
        } 
        else if(creatureType === 'SCP'){
            return(
                <div className="dataText">
                    <text className="firstAgent" >Name: {props.name}</text><br/><br/>
                    <text className="data" >ID: {props.idNum}</text><br/><br/>
                    <text className="data" >Class: {props.class}</text><br/><br/>
                </div>
            );
        }
    }
    return(
       creature(type)
    );
}

export default Creature;