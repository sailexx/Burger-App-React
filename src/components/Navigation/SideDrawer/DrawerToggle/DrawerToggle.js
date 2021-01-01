import React from 'react'
import './DrawerToggle.css'

const drawertoggle = (props) =>{
    return(
        <div onClick = {props.clicked}
        className = "DrawerToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
export default drawertoggle; 