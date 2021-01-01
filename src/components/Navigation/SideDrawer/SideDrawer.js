import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'


const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open){
        attachedClasses = ["SideDrawer", "Open"];
    }


    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.handler}/>
            <div className = {attachedClasses.join(' ')}>
                <Logo height = "10%"/>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
}
export default sideDrawer;