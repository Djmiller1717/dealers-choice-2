import React from "react"
import axios from 'axios'
import {connect} from 'react-redux'
import store, {thunkGetIngredients} from './store'

//import any sub-components

class App extends React.Component {
	constructor(){
		super()
	}
	componentDidMount(){
		this.props.loadIngredients();
	}
	render(){
		const ingredients = this.props.ingredients
		console.log(ingredients)
		return (
			<ul>
				{ingredients.map(ingredient => {
					return (
					<li key = {ingredient.id}>{ingredient.name}</li>
					)
				})}
			</ul>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadIngredients: function(){ 
			dispatch(thunkGetIngredients())
		}
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)