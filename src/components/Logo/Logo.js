import React from 'react';
import Logo from '../../assets/burger-logo.png';
import './Logo.css'

const logo = (props) => (
    <div className = "Logo" style = {{height: props.height}}>
        <img src = {Logo} alt = "Burger Logo"></img>
    </div>

);

export default logo;