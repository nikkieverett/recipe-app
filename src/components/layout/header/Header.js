import PropTypes from 'prop-types'
import React from 'react'

// MUI Components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Custom components
import Tabs from './Tabs'

// Styles
import headerStyles from './Header.styles'

const Header = ({ setMobileOpen, mobileOpen }) => {
  const classes = headerStyles()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  // TODO: change title based on current category
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          All Recipes
        </Typography>
      </Toolbar>
      <Tabs />
    </AppBar>
  )
}

Header.propTypes = {
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func
}

export default Header
