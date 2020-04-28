import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// MUI Components
import Grid from '@material-ui/core/Grid'

// Components
import RecipeCard from './RecipeCard'

// Styles
import recipeListStyles from './RecipeList.styles'

const RecipeList = ({ recipes }) => {
  const classes = recipeListStyles()

  return (
    <div className={classes.content}>
      <Grid container spacing={2}>
        {recipes &&
          recipes.map(({ node: recipe }) => (
            <Grid item key={recipe.frontmatter.path} className={classes.item}>
              <RecipeCard title={recipe.frontmatter.title} category={recipe.frontmatter.category} rating={recipe.frontmatter.rating} totalTime={recipe.frontmatter.totalTime} ease={recipe.frontmatter.ease} path={recipe.frontmatter.path} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.array
}

function mapStateToProps(state) {
  return {
    recipes: state.filteredRecipes
  }
}

export default connect(mapStateToProps)(RecipeList)
