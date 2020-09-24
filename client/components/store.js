import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    ingredients: []
}

const GET_INGREDIENTS = 'GET_INGREDIENTS'
const ADD_INGREDIENT = 'ADD_INGREDIENT'
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'

const getIngredients = (ingredients) => {
    return {
        type: GET_INGREDIENTS,
        ingredients
    }
}

const addIngredient = (ingredient) => {
    return {
        type: ADD_INGREDIENT,
        ingredient
    }
}

const removeIngredient = (id) => {
    return {
        type: REMOVE_INGREDIENT,
        id
    }
}

const updateIngredient = (ingredient) => {
    return {
        type: UPDATE_INGREDIENT,
        ingredient
    }
}
 
const thunkGetIngredients = () => async(dispatch) => {
    const {data} = await axios.get('/api/ingredients')
    dispatch(getIngredients(data))
}

const thunkAddIngredient = (ingredient) => async(dispatch) => {
    //What is the ingredient here???
    const response = await axios.post('/api/ingredients', {ingredient})
    dispatch(addIngredient(response.data))
}

const thunkRemoveIngredient = (id) => async(dispatch) => {
    await axios.delete(`/api/ingredients/${id}`)
    dispatch(removeIngredient(id))
}

const thunkUpdateIngredient = (ingredient) => async(dispatch) => {
    const {data} = await axios.put(`/api/ingredients/${ingredient.id}`)
    dispatch(updateIngredient(data))
}

function reducer(state = initialState, action){
    switch (action.type){
        case GET_INGREDIENTS:
            return {...state, ingredients: action.ingredients}
        case ADD_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.ingredient]}
        case REMOVE_INGREDIENT:
            const ingredients = state.ingredients.filter(ingredient => ingredient.id !== action.id*1)
            return {...state, ingredients}
        case UPDATE_INGREDIENT:
            const newIngredients = state.ingredients.map(ingredient => ingredient.id === action.ingredient.id ? action.ingredient : ingredient)
            return {...state, ingredients: newIngredients}
        default:
            return state
    }
}

// const allReducers = combineReducers({
//     ingredients: reducer
// })

const store = createStore(reducer, applyMiddleware(thunk))
export default store
export {thunkGetIngredients, thunkAddIngredient, thunkRemoveIngredient, thunkUpdateIngredient}