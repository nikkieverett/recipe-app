import React from 'react'

// MUI Components
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

// Styles
import tabStyles from './Tabs.styles'

export default function SimpleTabs() {
  const classes = tabStyles()
  const [value, setValue] = React.useState(0)
  // TODO: pass in subcategories as props
  // TODO: map over and render

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
          <Tab label="Item Two" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
          <Tab label="Item Three" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
        </Tabs>
      </AppBar>
    </div>
  )
}
