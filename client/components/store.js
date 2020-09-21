import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
    ingredients: []
}

function reducer(state = initialState, action){
    switch (action.type){
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store