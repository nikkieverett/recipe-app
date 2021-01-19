import React from 'react'
import PropTypes from 'prop-types'

// MUI Components
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'


// Styles
import navigationStyles from './Navigation.styles'

const RecipeCardNavigation = ({ setMobileOpen, mobileOpen, container, frontmatter }) => {
  const classes = navigationStyles()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleAddNew = () => {
    const URL = `${window.location.origin}/admin/#/collections/recipe/new`

    window.open(URL, '_blank')
  }

  const drawerContents = (
    <>
      <List>
        <ListItem button key={0}>
          <ListItemIcon className={classes.icon}>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary="Back to recipes" type="button" onClick={handleBackBtnClick} className={classes.listItem} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={0}>
          <ListItemIcon className={classes.icon}>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Recipe" type="button" onClick={handleEditRecipe} className={classes.listItem} />
        </ListItem>
      </List>
      <List>
        <ListItem button key={0}>
          <ListItemIcon className={classes.icon}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add New" type="button" onClick={handleAddNew} className={classes.listItem} />
        </ListItem>
      </List>
    </>
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
            paper: classes.recipeCardDrawer
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
            paper: classes.recipeCardDrawer
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

RecipeCardNavigation.propTypes = {
  container: PropTypes.any,
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func
}

export default RecipeCardNavigation
