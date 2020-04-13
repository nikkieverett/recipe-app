import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Link, graphql, StaticQuery } from "gatsby"
import RecipeCard from './RecipeCard'
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    alignItems: 'stretch'
  },
  item: {
    flexBasis: 300,
    height: 300,
    marginLeft: 15,
    marginBottom: 15
  }
}))

export const RecipeList = props => {
  const { data } = props
  const { edges: recipes } = data.allMarkdownRemark

  const classes = useStyles()

  return (
    <Grid container spacing='2' className={classes.root}>
      {recipes &&
        recipes.map(({ node: recipe }) => (
          <Grid item key={recipe.frontmatter.path} className={classes.item}>
            <RecipeCard
              title={recipe.frontmatter.title}
              category={recipe.frontmatter.category}
              rating={recipe.frontmatter.rating}
              totalTime={recipe.frontmatter.totalTime}
              ease={recipe.frontmatter.ease}
            />
          </Grid>
        ))}
    </Grid>
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
