/* eslint-disable import/no-named-as-default */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Custom Components
import RecipeList from '../components/RecipeList/RecipeList'

// Store
import actions from '../store/actions'

const App = ({ dispatch, allRecipes }) => {

  if (!allRecipes.length) {
    dispatch(actions.FETCH_ALL_RECIPES)
  }

  return (
    <RecipeList />
  )
}

function mapStateToProps(state) {
  return {
    allRecipes: state.allRecipes
  }
}

export default connect(mapStateToProps)(App)
