/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// Custom Components
import RecipeList from '../components/RecipeList'
import RecipeListHeader from '../components/layout/header/RecipeListHeader'
import RecipeListNavigationDrawer from '../components/layout/navigation/RecipeListNavigationDrawer'

import actions from '../store/actions'

const appStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  }
}))

const App = ({ snackBarOpen, snackBarText, dispatch }) => {
  const classes = appStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleClose() {
    dispatch(actions.DISMISS_SNACKBAR)
  }

  return (
    <>
      <div className={classes.root}>
        <RecipeListHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <RecipeListNavigationDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className={classes.content}>
          <RecipeList />
        </div>
      </div>
      <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
          {snackBarText}
        </MuiAlert>
      </Snackbar>
    </>
  )
}

App.propTypes = {
  dispatch: PropTypes.func,
  snackBarOpen: PropTypes.any,
  snackBarText: PropTypes.any
}

function mapStateToProps(state) {
  return {
    snackBarText: state.snackBarText,
    snackBarOpen: state.snackBarOpen
  }
}

export default connect(mapStateToProps)(App)
