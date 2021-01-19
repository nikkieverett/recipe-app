import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// MUI Components
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import EditIcon from '@material-ui/icons/Edit'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Components
import SearchBar from '../SearchBar/SearchBar'

// Styles
import navigationStyles from './Navigation.styles'

// Data
import data from '../../data/categories.json'
import actions, { sortByCategory, sortBySubCategory } from '../../store/actions'

const NavigationDrawer = ({ setMobileOpen, mobileOpen, container, dispatch, selectedCategory, selectedSubcategory }) => {
  const classes = navigationStyles()
  const categories = Object.keys(data)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleAddNew = () => {
    const URL = `${window.location.href}admin/#/collections/recipe/new`

    window.open(URL, '_blank')
  }

  const handleBackBtnClick = () => {
    window.location.replace(window.location.origin)
  }

  const handleEditRecipe = () => {
    const URL = `${window.location.origin}/admin/#/collections/recipe/entries${frontmatter.path}`

    window.open(URL, '_blank')
  }

  const handleSort = (e, subcat) => {
    e.stopPropagation()

    dispatch(sortBySubCategory(subcat))
  }

  const clearAll = () => {
    setExpanded(false)
    dispatch(actions.REMOVE_FILTERED_RECIPES)
  }

  useEffect(() => {
    setExpanded(false)
  }, [])

  const drawerContents = (
    <div>
      <div className={classes.logoContainer}>
        <img src="./logo-white.png" alt="" className={classes.logo}/>
        <p className={classes.pageTitle}>Mama's Cookbook</p>
      </div>
      <Divider />
      <div className={classes.searchBar}>
        <SearchBar />
      </div>
      <Divider />
      <List>
        <ListItem button key="all" onClick={() => clearAll()}>
          <ListItemText primary="all recipes" />
        </ListItem>
        {categories.map(category => (
          <ListItem button key={category} onClick={() => dispatch(sortByCategory(category))} className={category === selectedCategory ? classes.accordionSelected : ''}>
            <Accordion className={classes.accordion} expanded={expanded === category} onChange={handleChange(category)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={category + '-content'}
                id={category + '-header'}
                className={classes.accordionSummary}
              >
                <Typography className={classes.heading}>{category}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <List className={classes.category}>
                  {data[category].map(subcategory => (
                    <ListItem button key={subcategory} onClick={(e) => handleSort(e, subcategory)} className={subcategory === selectedSubcategory ? classes.selectedSubcategory : classes.subcategory}>{subcategory}</ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={handleAddNew}>
          <ListItemText>Add new recipe</ListItemText>
        </ListItem>
        <ListItem button key={0}>
          <ListItemText primary="Edit Recipe" type="button" onClick={handleEditRecipe} className={classes.listItem} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEOß duplication of links. */}
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
