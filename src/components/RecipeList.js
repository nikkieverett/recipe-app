import React from 'react'
import PropTypes from 'prop-types'
import { useStore } from 'react-redux'

// MUI Components
import Grid from '@material-ui/core/Grid'

// Components
import RecipeCard from './RecipeCard'

// Styles
import recipeCardStyles from './RecipeCard.styles'

const RecipeList = () => {
  const recipes = useStore().getState().allRecipes
  const classes = recipeCardStyles()

  return (
    <div className={classes.content}>
      <Grid container spacing={2}>
        {recipes &&
          recipes.map(({ node: recipe }) => (
            <Grid item key={recipe.frontmatter.path}>
              <RecipeCard title={recipe.frontmatter.title} category={recipe.frontmatter.category} rating={recipe.frontmatter.rating} totalTime={recipe.frontmatter.totalTime} ease={recipe.frontmatter.ease} path={recipe.frontmatter.path} />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

RecipeList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export default RecipeList
