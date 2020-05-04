/* eslint-disable import/no-named-as-default */
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

// Custom Components
import RecipeList from '../components/RecipeList'
import RecipeListHeader from '../components/layout/header/RecipeListHeader'
import RecipeListNavigationDrawer from '../components/layout/navigation/RecipeListNavigationDrawer'

// Store
import reducer from '../store/reducer'
import actions from '../store/actions'

const store = createStore(reducer)

const appStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  }
}))

const App = () => {
  const classes = appStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  let recipesFetched = false

  if (!recipesFetched) {
    store.dispatch(actions.FETCH_ALL_RECIPES)
    recipesFetched = true
  }

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <RecipeListHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <RecipeListNavigationDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className={classes.content}>
          <RecipeList />
        </div>
      </div>
    </Provider>
  )
}

export default App

// TODO: add loading state
