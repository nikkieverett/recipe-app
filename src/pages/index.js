/* eslint-disable import/no-named-as-default */
import React from 'react'
import { connect } from 'react-redux'

// Custom Components
import Page from '../components/HomePage/Page'

// Store
import actions from '../store/actions'

const App = ({ dispatch }) => {
  let recipesFetched = false

  if (!recipesFetched) {
    dispatch(actions.FETCH_ALL_RECIPES)
    recipesFetched = true
  }

  return (
    <Page />
  )
}

export default connect(null)(App)
