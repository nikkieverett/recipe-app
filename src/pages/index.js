import React from "react"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import RecipeList from "../components/RecipeList"
import { makeStyles } from "@material-ui/core/styles"

import NavigationDrawer from '../components/NavigationDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}))

const RecipeIndexPage = () => {

  const classes = useStyles()

  return (

    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <NavigationDrawer />
        <div className={classes.content}>
          <Typography variant="h3">All Recipes</Typography>
          <RecipeList />
        </div>
      </div>
    </React.Fragment>
  )
}
