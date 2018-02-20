import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// Action creators
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients // Using function parameter 
    };
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    // Thunk permits this syntax
    return dispatch => {
        axios.get('https://burger-builder-22f3d.firebaseio.com/ingredients.json')
        .then(res => {
            dispatch(setIngredients(res.data));
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed());
        });
    };
}