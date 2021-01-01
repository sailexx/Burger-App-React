import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Layout/Burger/Burger'
import './BurgerBuilder.css';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Layout/Burger/OrderSummery/OrderSummery';

const INGRIDIENTS_PRICE = {
    salad:0.3,
    bacon:0.8,
    meat:1.2,
    cheese:0.5
};

class BurgerBuilder extends Component {
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice: 4,
        purchaseable : false,
        purchasing : false
        
    }
    
    PurchasingHandler = () => {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        alert('Thank You, Your order will be ready')

    }

    updatePurchaseState(ing){
        const sum = Object.values(ing).reduce((sum, el) =>{
            return sum + el
        },0)
        this.setState({purchaseable: sum > 0})
        
    }

    addIngHandler = (type) =>{
        const tempState = {...this.state.ingredients};
        const oldCount = this.state.ingredients[type];
        tempState[type] = oldCount + 1;
        //PRICE
        const tempPrice = this.state.totalPrice;
        const newPrice = tempPrice + INGRIDIENTS_PRICE[type]
        this.setState({ingredients: tempState, totalPrice: newPrice});
        
        // Update if to enable or disable the order buttom
        this.updatePurchaseState(tempState);
    }

    removeIngHandler = (type) =>{
        if(this.state.ingredients[type] === 0){
            return null
        }
        const tempState = {...this.state.ingredients};
        const oldCount = this.state.ingredients[type];
        tempState[type] = oldCount - 1;
        //PRICE
        const tempPrice = this.state.totalPrice;
        const newPrice = tempPrice - INGRIDIENTS_PRICE[type]
        this.setState({ingredients: tempState, totalPrice: newPrice});

        // Update if to enable or disable the order buttom
        this.updatePurchaseState(tempState);
    }

    render(){
        const disabledInfo ={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show = {this.state.purchasing} backdropClicked = {this.purchaseCancelHandler}>
                    <OrderSummery 
                    price = {this.state.totalPrice.toFixed(2)}
                    purchaseCancelled = {this.purchaseCancelHandler} 
                    purchaseContinued = {this.purchaseContinueHandler} ingredients = {this.state.ingredients}/> 
                </Modal>
                <Burger ingredients ={this.state.ingredients}></Burger>
                <BuildControls ingredientAdded = {this.addIngHandler} 
                ingredientRemoved ={this.removeIngHandler}
                disabled = {disabledInfo} 
                purchaseable = {this.state.purchaseable}
                ordered = {this.PurchasingHandler}
                price ={this.state.totalPrice.toFixed(2)}></BuildControls> 
            </Aux>
        )
    }
}
export default BurgerBuilder;

