import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {thunkAddIngredient} from './store'
import Ingredient from './Ingredient'

class Ingredients extends Component{ 
    constructor(){
        super()
        this.state = {
            name: ''
        }
        this.add = this.add.bind(this)
    }
    add(ev){
       ev.preventDefault();
       this.props.addIngredient(this.state.name)
       this.setState({name: ''})
    }
    render(){
        const {ingredients} = this.props
        const {name} = this.state
        const {add} = this
        return (
            <div>
                <h3>Ingredients:</h3>
                <form onSubmit={add}>
                    <input value={name} onChange={ev => this.setState({name: ev.target.value})}></input>
                    <button disabled={!name}>Add</button>
                </form>
                <ul>
                    {ingredients.map(ingredient => {
                        return (
                            <li key = {ingredient.id}>
                                <Link to={`/ingredients/${ingredient.id}`}>
                                    {ingredient.name}
                                </Link>
                            </li>
                            )
                        })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredient: (ingredient)=> {
            dispatch(thunkAddIngredient(ingredient))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients)