/* eslint-disable import/no-named-as-default */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Typography from '@material-ui/core/Typography'

// Custom Components
import RecipeList from '../RecipeList/RecipeList'
import RecipeListHeader from '../Header/RecipeListHeader'
import RecipeListNavigationDrawer from '../Navigation/RecipeListNavigationDrawer'

import actions from '../../store/actions'
import appStyles from './Page.styles'

const App = ({ snackBarOpen, snackBarText, dispatch, category, subcategory }) => {
  const classes = appStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleClose() {
    dispatch(actions.DISMISS_SNACKBAR)
  }

  return (
    <>
      <div className={classes.root}>
        <RecipeListNavigationDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className={classes.content}>
          <Typography variant="h6" noWrap className={classes.header}>
            {category || 'All Recipes'}
            {subcategory ? ` | ${subcategory}` : ''}
          </Typography>
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
    snackBarOpen: state.snackBarOpen,
    category: state.category,
    subcategory: state.subcategory
  }
}

export default connect(mapStateToProps)(App)
