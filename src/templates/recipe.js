import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'

import RecipeCardNavigation from '../components/layout/navigation/RecipeCardNavigation'
import RecipeCardHeader from '../components/layout/header/RecipeCardHeader'

const recipeStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    margin: '80px 40px 40px',
    padding: 20
  }
}))

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const classes = recipeStyles()
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <div className={classes.root}>
      <RecipeCardHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} frontmatter={frontmatter} />
      <RecipeCardNavigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} frontmatter={frontmatter} />
      <Paper className={classes.card}>
        <Grid container justify="center" spacing={2}>
          <Grid xs={12}>
            {/* {frontmatter.servings && <h5>Servings: {frontmatter.servings}</h5>} */}
            {frontmatter.rating && <h5>Rating: {frontmatter.rating}</h5>}
            {frontmatter.ease && <h5>Difficulty: {frontmatter.ease}</h5>}
            {frontmatter.category && <h5>Category: {frontmatter.category}</h5>}
            {frontmatter.totalTime && <h5>Total Time: {frontmatter.totalTime}</h5>}
            {frontmatter.cookTime && <h5>Cook Time: {frontmatter.cookTime}</h5>}
            {frontmatter.prepTime && <h5>Prep Time: {frontmatter.prepTime}</h5>}
          </Grid>
          <Grid key={1} xs={12} sm={6} item>
            <Typography variant="h5" component="h2" className={classes.item}>
              Ingredients:
            </Typography>
            <ReactMarkdown source={frontmatter.ingredients} />
          </Grid>
          <Grid key={0} xs={12} sm={6} item>
            <Typography variant="h5" component="h2" className={classes.item}>
              Directions:
            </Typography>
            <ReactMarkdown source={frontmatter.directions} />
          </Grid>
          <Grid xs={12}>
            <Typography variant="h5" component="h2" className={classes.item}>
              Notes:
            </Typography>
            {frontmatter.href && <h5>Link: {frontmatter.href}</h5>}
            <ReactMarkdown source={frontmatter.notes} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.any
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        directions
        ingredients
        rating
        category
        subcategory
        ease
        href
        notes
        totalTime
        prepTime
        cookTime
      }
    }
  }
`
