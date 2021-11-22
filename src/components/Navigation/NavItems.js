import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, navigate } from 'gatsby'

// MUI Components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden'

// Components
import SearchBar from '../SearchBar/SearchBar'

// Styles
import navigationStyles from './Navigation.styles'

// Data
import data from '../../data/categories.json'
import actions, { sortByCategory, sortBySubCategory } from '../../store/actions'

const NavItems = ({ dispatch, selectedCategory, selectedSubcategory, location, handleDrawerToggle }) => {
  const classes = navigationStyles()
  const categories = Object.keys(data)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAddNew = () => {
    const URL = `${location.origin}/admin/#/collections/recipe/new`
    window.open(URL, '_blank')
  }

  const handleFilterByCat = (e, category) => {
    e.stopPropagation()
    if (location.pathname !== '/') {
      navigate('/')
    }

    dispatch(sortByCategory(category))
  }

  const handleFilterBySubCat = (e, subcat) => {
    e.stopPropagation()
    if (handleDrawerToggle) {
      handleDrawerToggle()
    }
    setExpanded(false)
    dispatch(sortBySubCategory(subcat))
  }

  const clearAll = () => {
    setExpanded(false)
    if (handleDrawerToggle) {
      handleDrawerToggle()
    }
    dispatch(actions.REMOVE_FILTERED_RECIPES)
  }

  useEffect(() => {
    setExpanded(false)
  }, [])

  return (
    <>
      <div className={classes.logoContainer}>
        <div className={classes.logo}></div>
        <p className={classes.pageTitle}>Mama's Cookbook</p>
      </div>
      <Divider />
      <div className={classes.searchBar}>
        <SearchBar location={location} />
      </div>
      <Hidden smDown implementation="css">
        <Divider />
        <List className={classes.addNew}>
          <ListItem button onClick={handleAddNew}>
            <ListItemText>Add new recipe</ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Hidden>
      <List>
        <ListItem button key="all">
          <Link to="/" onClick={() => clearAll()} className={classes.link}>
            <ListItemText primary="all recipes" />
          </Link>
        </ListItem>
        {categories.map(category => (
          <ListItem button key={category} onClick={(e) => handleFilterByCat(e, category)} className={category === selectedCategory ? classes.accordionSelected : ''}>
            <Accordion className={classes.accordion}  expanded={expanded === category} onChange={handleChange(category)}>
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
                    <ListItem button key={subcategory} onClick={(e) => handleFilterBySubCat(e, subcategory)} className={subcategory === selectedSubcategory ? classes.selectedSubcategory : classes.subcategory}>
                      {subcategory}
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
      </List>
     
    </>
  )
}

NavItems.propTypes = {
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


export default connect(mapStateToProps)(NavItems)
