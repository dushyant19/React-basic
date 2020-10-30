import React from 'react';
import './card.css';


export const Card = (props)=>{
    return(
    <div className="card">
        <img alt="monster" src = {`https://robohash.org/${props.monster.id}/?set=set2&size=180x180`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
    );
}