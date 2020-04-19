import React from 'react'
import PropTypes from 'prop-types'

// MUI Components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'

// Styles
import navigationStyles from './Navigation.styles'

const NaviationDrawer = ({ setMobileOpen, mobileOpen, container }) => {
  const classes = navigationStyles()
  const categories = ['Inbox', 'Starred', 'Send email', 'Drafts']

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContents = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {categories.map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
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
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func
}

export default NaviationDrawer
