import React from "react"
import axios from 'axios'
import {connect} from 'react-redux'
import store, {thunkGetIngredients} from './store'
import Ingredients from './Ingredients'
import {HashRouter as Router, Route} from 'react-router-dom'

//import any sub-components

class App extends React.Component {
	constructor(){
		super()
	}
	componentDidMount(){
		this.props.loadIngredients();
	}
	render(){
		return (
			<Router>
				<div>
					<Route path='/' exact component={Ingredients} />
					<Route path='/ingredients' component={Ingredients} />
				</div>
			</Router>
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

// const mapStateToProps = (state) => {
// 	return {
// 		ingredients: state.ingredients
// 	}
// }

export default connect(null, mapDispatchToProps)(App)