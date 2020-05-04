import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

// MUI Components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from '@material-ui/core/InputAdornment'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import DirectionsIcon from '@material-ui/icons/Directions'

// Custom components
import Tabs from './Tabs'

// Styles
import headerStyles from './Header.styles'

const Header = ({ setMobileOpen, mobileOpen, category, subcategory }) => {
  const classes = headerStyles()
  const [values, setValues] = React.useState({
    searchInput: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.header}>
          {category || 'All Recipes'}
          {subcategory ? ` | ${subcategory}` : ''}
        </Typography>
        <Paper component="form" className={classes.textField}>
          <InputBase className={classes.input} placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }} />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>
      <Tabs />
    </AppBar>
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
