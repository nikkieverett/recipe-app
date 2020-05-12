import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'

import actions, { onQueryInput } from '../../store/actions'
import searchBarStyles from './SearchBar.styles'

const SearchBar = ({ dispatch, location }) => {
  const classes = searchBarStyles()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(actions.FILTER_RECIPES)
  }

  const handleChange = event => {
    dispatch(onQueryInput(event.target.value))
  }

  return (
    <div className={classes[location]}>
      <Paper component="form" className={classes.textField}>
        <InputBase onChange={handleChange} className={classes.input} placeholder="Search" inputProps={{ 'aria-label': 'search google maps' }} />
        <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

SearchBar.propTypes = {
  dispatch: PropTypes.func,
  location: PropTypes.any
}

export default connect(null)(SearchBar)
