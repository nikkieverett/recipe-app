import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Components
import RecipeCard from '../RecipeCard/RecipeCard'

// Styles
import recipeListStyles from './RecipeList.styles'

const RecipeList = ({ recipes }) => {
  const classes = recipeListStyles()

  return (
    <>
      <div className={classes.content}>
        {recipes &&
          recipes.map(({ node: recipe }) => (
            <div className={classes.gridListItem} key={recipe.frontmatter.title}>
              <RecipeCard needsMarinade={recipe.frontmatter.needsMarinade} thumbnail={recipe.frontmatter.thumbnail} title={recipe.frontmatter.title} category={recipe.frontmatter.category} rating={recipe.frontmatter.rating} totalTime={recipe.frontmatter.totalTime} ease={recipe.frontmatter.ease} path={recipe.frontmatter.path} />
            </div>
          ))}
      </div>
    </>
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
