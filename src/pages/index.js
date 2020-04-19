/* eslint-disable import/no-named-as-default */
import React from 'react'

// Custom Components
import RecipeList from '../components/RecipeList'
import Header from '../components/layout/header/Header'
import NavigationDrawer from '../components/layout/navigation/NavigationDrawer'

// Styles
import appStyles from './App.styles'

const App = () => {
  const classes = appStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <NavigationDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className={classes.content}>
        <RecipeList />
      </div>
    </div>
  )
}

export default App
