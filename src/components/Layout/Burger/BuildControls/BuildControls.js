import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];


const buildControls = (props) => (
    <div className = "BuildControls">
        <p>Current Price : <strong> </strong>{props.price}</p>
        {control.map(el =>(
            <BuildControl key ={el.label}  
            label = {el.label} 
            added = {() => props.ingredientAdded(el.type)}
            removed = {() => props.ingredientRemoved(el.type)}
            disabled ={props.disabled[el.type]} />
            ) 
        )}
        <button className = "OrderButton"
        disabled = {!props.purchaseable} 
        onClick = {props.ordered}>ORDER NOW</button>
        
    </div>
)

export default buildControls