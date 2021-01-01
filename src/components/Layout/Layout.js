import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerTogglerHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        });
    }





    render(){
        return(
        <Aux>
            <Toolbar toggleClicked = { this.sideDrawerTogglerHandler} />
            <SideDrawer open ={this.state.showSideDrawer} handler = {this.sideDrawerHandler} />
            <main className = "Content">
                {this.props.children}
            </main>
        </Aux>
        )
    }


};
export default Layout;