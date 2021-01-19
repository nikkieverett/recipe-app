import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

// MUI Components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

// Custom components
import Tabs from './Tabs'
import SearchBar from '../SearchBar/SearchBar'
// Styles
import headerStyles from './Header.styles'

const Header = ({ setMobileOpen, mobileOpen, category, subcategory }) => {
  const classes = headerStyles()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>

    </>
  )
}

Header.propTypes = {
  category: PropTypes.string,
  mobileOpen: PropTypes.any,
  setMobileOpen: PropTypes.func,
  subcategory: PropTypes.any
}

function mapStateToProps(state) {
  return {
    category: state.category,
    subcategory: state.subcategory
  }
}

export default connect(mapStateToProps)(Header)
