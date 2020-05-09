import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

// MUI Components
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// Styles
import tabStyles from './Tabs.styles'

// Data
import data from '../../../data/categories.json'
import { sortBySubCategory, sortByCategory } from '../../../store/actions'

const TabDrawer = ({ category, dispatch, tabValue }) => {
  const classes = tabStyles()
  const subcategories = data[category]

  const handleChange = (event, newValue) => {
    const newSubCategory = event.target.innerText.toLowerCase()
    if (newSubCategory === 'all') {
      dispatch(sortByCategory(category))
    } else {
      dispatch(sortBySubCategory(newSubCategory, newValue))
    }
  }

  if (!subcategories) {
    return (
      <div className={classes.root}>
        <AppBar position="static" />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={tabValue} onChange={handleChange} indicatorColor="secondary" variant="scrollable" scrollButtons="auto">
          <Tab key="All" label="all" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
          {subcategories.map((subcategory, index) => {
            // eslint-disable-next-line no-param-reassign
            index += 1

            return <Tab key={subcategory} label={subcategory} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} />
          })}
        </Tabs>
      </AppBar>
    </div>
  )
}

TabDrawer.propTypes = {
  category: PropTypes.any,
  dispatch: PropTypes.func,
  tabValue: PropTypes.any
}

function mapStateToProps(state) {
  return {
    category: state.category,
    subcategory: state.subcategory,
    tabValue: state.tabValue
  }
}

export default connect(mapStateToProps)(TabDrawer)
