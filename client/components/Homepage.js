import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Homepage = () => {
    return (
        <Link to='/ingredients'>Let's make a burrito!</Link>
    )
}

export default connect()(Homepage)