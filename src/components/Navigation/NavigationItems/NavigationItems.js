import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
    // <ul className = "NagivationItems">
           
    // </ul>
    <div className="topnav">
        <NavigationItem link = "/">Burger Builder</NavigationItem>
        <NavigationItem link = "/" active>Checkout</NavigationItem>
    </div>

);

export default navigationItems;
