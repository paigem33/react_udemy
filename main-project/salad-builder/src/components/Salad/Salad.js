import React  from 'react'

import './Salad.css';
import SaladIngredients from './SaladIngredients/SaladIngredients';

const salad = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return <SaladIngredients key={key + i} type={key} />
        });
    }).reduce((array, element) => {
        return array.concat(element);
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p class="salad_ingredient">Please start selecting ingredients</p>;
    }
    return (
        <>
            {transformedIngredients}
            <div className="bowl"></div>
        </>
    )
}

export default salad;