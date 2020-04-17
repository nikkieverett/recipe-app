import React from "react"

// MUI Core
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

// Custom Components
import RecipeList from "../components/RecipeList"
import Header from '../components/layout/Header'
import NavigationDrawer from '../components/layout/NavigationDrawer'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const App = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className={classes.root}>
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <NavigationDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className={classes.content}>
        <Typography variant="h3">All Recipes</Typography>
        <RecipeList />
      </div>
    </div>
  )
}

export default App
