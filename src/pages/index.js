/* eslint-disable import/no-named-as-default */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Custom Components
import Page from './Page'

// Store
import reducer from '../store/reducer'
import actions from '../store/actions'

const store = createStore(reducer)

const App = () => {
  let recipesFetched = false
  const state = store.getState()

  if (!recipesFetched) {
    store.dispatch(actions.FETCH_ALL_RECIPES)
    recipesFetched = true
  }

  return (
    <Provider store={store}>
      <Page props={state} />
    </Provider>
  )
}

export default App
