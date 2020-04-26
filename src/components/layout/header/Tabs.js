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
import { sortBySubCategory } from '../../../store/actions'

const TabDrawer = ({ category, dispatch }) => {
  const classes = tabStyles()
  const subcategories = data[category]
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    const newSubCategory = event.target.innerText.toLowerCase()
    dispatch(sortBySubCategory(newSubCategory))
    setValue(newValue)
  }

  if (!subcategories) {
    return ''
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {subcategories.map((subcategory, index) => (
            <Tab key={subcategory} label={subcategory} id={`simple-tab-${index}`} aria-controls={`simple-tabpanel-${index}`} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  )
}

TabDrawer.propTypes = {
  category: PropTypes.any,
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
  return {
    category: state.category,
    subcategory: state.subcategory
  }
}

export default connect(mapStateToProps)(TabDrawer)
