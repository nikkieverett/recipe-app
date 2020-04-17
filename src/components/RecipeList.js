import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import RecipeCard from './RecipeCard'
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 75
  }
}))

export const RecipeList = props => {
  const { data, histroy } = props
  const { edges: recipes } = data.allMarkdownRemark
  const classes = useStyles()

  return (
    <div className={classes.content}>
      <Grid container spacing={2}>
        {recipes &&
          recipes.map(({ node: recipe }) => (
            <Grid item key={recipe.frontmatter.path}>
              <RecipeCard
                title={recipe.frontmatter.title}
                category={recipe.frontmatter.category}
                rating={recipe.frontmatter.rating}
                totalTime={recipe.frontmatter.totalTime}
                ease={recipe.frontmatter.ease}
                path={recipe.frontmatter.path}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}

RecipeList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                id
                servings
                notes
                directions
                ingredients
                rating
                ease
                category
                href
                totalTime
                cookTime
                prepTime
                title
                path
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeList data={data} count={count} />}
  />
)
