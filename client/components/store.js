import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    ingredients: []
}

const GET_INGREDIENTS = 'GET_INGREDIENTS'
const ADD_INGREDIENT = 'ADD_INGREDIENT'

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
 
const thunkGetIngredients = () => async(dispatch) => {
    const {data} = await axios.get('/api/ingredients')
    dispatch(getIngredients(data))
}

const thunkAddIngredient = (ingredient) => async(dispatch) => {
    const response = await axios.post('/api/ingredients', {ingredient})
    dispatch(addIngredient(response.data))
    //history.push('/ingredients')
}

function reducer(state = initialState, action){
    switch (action.type){
        case GET_INGREDIENTS:
            return {...state, ingredients: action.ingredients}
        case ADD_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.ingredient]}
        default:
            return state
    }
}

// const allReducers = combineReducers({
//     ingredients: reducer
// })

const store = createStore(reducer, applyMiddleware(thunk))
export default store
export {thunkGetIngredients, thunkAddIngredient}