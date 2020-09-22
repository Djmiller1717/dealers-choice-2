import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    ingredients: []
}

const GET_INGREDIENTS = 'GET_INGREDIENTS'

const getIngredients = (ingredients) => {
    return {
        type: GET_INGREDIENTS,
        ingredients
    }
}

const thunkGetIngredients = () => async(dispatch) => {
    const {data} = await axios.get('/ingredients')
    dispatch(getIngredients(data))
}

function reducer(state = initialState, action){
    switch (action.type){
        case GET_INGREDIENTS:
            return {...state, ingredients: action.ingredients}
        default:
            return state
    }
}

// const allReducers = combineReducers({
//     ingredients: reducer
// })

const store = createStore(reducer, applyMiddleware(thunk))
export default store
export {thunkGetIngredients}