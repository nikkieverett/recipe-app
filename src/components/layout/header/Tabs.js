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

const TabDrawer = ({ category }) => {
  const classes = tabStyles()
  const subcategories = data[category]
  const [subcategory, setSubcategory] = React.useState(0)

  const handleChange = (event, newValue) => {
    setSubcategory(newValue)
  }
  if (!subcategories) {
    return ''
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={subcategory} onChange={handleChange} aria-label="simple tabs example">
          {subcategories.map(subcategory => (
            <Tab label={subcategory} id={`simple-tab-${subcategory}`} aria-controls={`simple-tabpanel-${subcategory}`} />
          ))}
        </Tabs>
      </AppBar>
    </div>
  )
}

TabDrawer.propTypes = {
  category: PropTypes.any
}

function mapStateToProps(state) {
  return {
    category: state.category
  }
}

export default connect(mapStateToProps)(TabDrawer)
