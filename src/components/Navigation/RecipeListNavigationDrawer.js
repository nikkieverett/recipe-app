import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// MUI Components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'

// Styles
import navigationStyles from './Navigation.styles'

// Data
import data from '../../data/categories.json'
import actions, { sortByCategory } from '../../store/actions'

const NaviationDrawer = ({ setMobileOpen, mobileOpen, container, dispatch }) => {
  const classes = navigationStyles()
  const categories = Object.keys(data)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleAddNew = () => {
    const URL = `${window.location.href}admin/#/collections/recipe/new`

    window.open(URL, '_blank')
  }

  const drawerContents = (
    <div>
      <List>
        <ListItem button key="all" onClick={() => dispatch(actions.REMOVE_FILTERED_RECIPES)}>
          <ListItemText primary="all recipes" />
        </ListItem>
        {categories.map(text => (
          <ListItem button key={text} onClick={() => dispatch(sortByCategory(text))}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleAddNew}>
          <ListItemText>Add new recipe</ListItemText>
        </ListItem>
      </List>
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawerContents}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawerContents}
        </Drawer>
      </Hidden>
    </nav>
  )
}

NaviationDrawer.propTypes = {
  container: PropTypes.any,
  dispatch: PropTypes.func,
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func
}

export default connect()(NaviationDrawer)
