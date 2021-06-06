import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// MUI Components
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

// Components
import NavItems from './NavItems'

// Styles
import navigationStyles from './Navigation.styles'

const NavigationDrawer = ({ setMobileOpen, mobileOpen, container, location }) => {
  const classes = navigationStyles()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
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
          <NavItems location={location} />
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
          <NavItems location={location} />
        </Drawer>
      </Hidden>
    </nav>
  )
}

NavigationDrawer.propTypes = {
  container: PropTypes.any,
  dispatch: PropTypes.func,
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func
}

function mapStateToProps(state) {
  return {
    selectedCategory: state.category,
    selectedSubcategory: state.subcategory
  }
}

export default connect(mapStateToProps)(NavigationDrawer)
