import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'gatsby'

// MUI Components
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


// Custom Components
import NavigationDrawer from '../Navigation/NavigationDrawer'
import HeaderMobile from '../Header/HeaderMobile'

import appStyles from './Layout.styles'
import actions, { sortByCategory, sortBySubCategory } from '../../store/actions'

const Layout = ({ snackBarOpen, snackBarText, dispatch, category, subcategory, searchText, recipesFilteredBySearch, children, location, selectedRecipe }) => {
  const classes = appStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  function handleClose() {
    dispatch(actions.DISMISS_SNACKBAR)
  }

  function handleAddNew() {
    const URL = `${location.origin}/admin/#/collections/recipe/new`
    window.open(URL, '_blank')
  }

  return (
    <>
      <HeaderMobile location={location} onMenuClick={setMobileOpen} mobileOpen={mobileOpen}></HeaderMobile>
      <div className={classes.root}>
        <NavigationDrawer location={location} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <div className={classes.content}>

          <div className={classes.header}>
            <Breadcrumbs>
              <Link className={classes.link} to="/" onClick={() => (dispatch(actions.REMOVE_FILTERED_RECIPES))}>
                {'All Recipes'}
              </Link>
              {category && (
                <Link className={classes.secondaryLink} to="/" onClick={() => (dispatch(sortByCategory(category)))}>
                  {category}
                </Link>
              )}
              {subcategory && (
                <Link className={classes.secondaryLink} to="/" onClick={() => (dispatch(sortBySubCategory(subcategory)))}>
                  {subcategory}
                </Link>
              )}
              {(recipesFilteredBySearch && searchText) && (
                <Link className={classes.searchResults} to="/" onClick={() => dispatch(actions.FILTER_RECIPES)}>
                  {`Search Results for: "${searchText}"`}
                </Link>
              )}
              {selectedRecipe && <span className={classes.selectedRecipe}>{selectedRecipe}</span>}
            </Breadcrumbs>
          </div>
          {children}
        </div>
      </div>
      <Snackbar open={snackBarOpen} autoHideDuration={60000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="error">
          {snackBarText}
        </MuiAlert>
      </Snackbar>
      <Fab color="secondary" aria-label="add" className={classes.addNewButton} onClick={() => handleAddNew()}>
        <AddIcon className={classes.addNewButtonIcon} />
      </Fab>
    </>
  )
}

Layout.propTypes = {
  dispatch: PropTypes.func,
  snackBarOpen: PropTypes.any,
  snackBarText: PropTypes.any
}

function mapStateToProps(state) {
  return {
    snackBarText: state.snackBarText,
    snackBarOpen: state.snackBarOpen,
    category: state.category,
    subcategory: state.subcategory,
    searchText: state.queryInput,
    recipesFilteredBySearch: state.recipesFilteredByQuery,
    selectedRecipe: state.selectedRecipe
  }
}

export default connect(mapStateToProps)(Layout)
