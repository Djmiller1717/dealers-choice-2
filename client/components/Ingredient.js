import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {thunkRemoveIngredient} from './store'
import {HashRouter as Router, Route} from 'react-router-dom'
import Ingredients from './Ingredients'
import {Link} from 'react-router-dom'

class Ingredient extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }
    componentDidMount(){
        const urlId = this.props.match.params.id*1
        const ingredient = this.props.ingredients.find(elem => elem.id === urlId)
        if (ingredient){
            this.setState({name: ingredient.name})
        }
    }
    render(){
        return (
            <div>
                <h3>{this.state.name}</h3>
                <Link to='/ingredients'>
                <button onClick={()=>this.props.removeIngredient(this.props.match.params.id)}>
                    Remove Ingredient
                </button>
                </Link>
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
        removeIngredient: (id)=> {
            dispatch(thunkRemoveIngredient(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredient)