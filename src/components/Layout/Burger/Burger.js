
import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    // const transfromedIngredients = Object.keys(props.ingredients) //convert object into array properties only exclude properties value
    // .map(igKeys =>{
    //     return [...Array(props.ingredients[igKeys])].map((_, i) =>{
    //         return <BurgerIngredient key = {igKeys + i} type = {igKeys}/>
    //     })
    // }).reduce((arr,el)=>{
    //     return array.concat(el)
    // }, []);
    //if(transformedIngredients.length === 0){
    //     transfromedIngredients = <p> Please start adding ingredients</p>
    // }

// ANOTHER METHOD

    // const ing = Object.keys(props.ingredients)
    // const amt = Object.values(props.ingredients)
    // const IngArr = [];
    // ing.forEach((ingredient, index) => {
    //     let i = 0;
    //     while(i<amt[index]){
    //         i++
    //         IngArr.push( <BurgerIngredient key = {ingredient + i} type = {ingredient} /> )
    //     }         
    // });
    // console.log(IngArr)

    const IngArr = [];
    Object.keys(props.ingredients).forEach((ingredient, index) => {
        let i = 0;
        while(i<Object.values(props.ingredients)[index]){
            i++
            IngArr.push( <BurgerIngredient key = {ingredient + i} type = {ingredient} /> )
        }         
    });
    if(IngArr.length === 0){
        IngArr[0] = <p key = 'noIngredientAdded'>Please start adding ingredients</p>
    }
    

    return(
        <div className = "Burger">
            <BurgerIngredient type = "bread-top" />
            {IngArr.map(el => el)}
    
            <BurgerIngredient type = "bread-bottom" />
        </div>
    );
}
export default burger;