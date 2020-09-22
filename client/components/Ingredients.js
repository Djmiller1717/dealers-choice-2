import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Ingredients = ({ingredients}) => {
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

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients
	}
}

export default connect(mapStateToProps)(Ingredients)