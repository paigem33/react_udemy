import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import './SaladIngredients.css';
import lettuce from './images/lettuce.png';
import peppers from './images/pepper.png';
import cucumbers from './images/cucumber.png';
import spinach from './images/spinach.png';

class SaladIngredients extends Component {
    render(){
        let ingredients = null;

        switch (this.props.type) {
            case('lettuce'):
                ingredients = <p class="salad_ingredient">Lettuce</p> 
                break;
            case('peppers'):
                ingredients = <p class="salad_ingredient">Peppers</p> 
                break;
            case('cucumbers'): 
                ingredients = <p class="salad_ingredient">Cucumbers</p> 
                break;
            case('spinach'):
                ingredients = <p class="salad_ingredient">Spinach</p> 
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }
}

SaladIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default SaladIngredients;