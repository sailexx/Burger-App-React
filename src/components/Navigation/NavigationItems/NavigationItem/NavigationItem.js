import React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
    <a href ={props.link} className = {props.active? "active" : null} >{props.children}</a>
);

export default navigationItem;