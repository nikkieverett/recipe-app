import PropTypes from 'prop-types'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import PieChartIcon from '@material-ui/icons/PieChart'

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import LinkIcon from '@material-ui/icons/Link'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Divider from '@material-ui/core/Divider'

import RecipeCardHeader from '../components/layout/header/RecipeCardHeader'
import RecipeCardNavigation from '../components/layout/navigation/RecipeCardNavigation'

const recipeStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    margin: '80px 40px 40px',
    padding: 20,
    [theme.breakpoints.down('xs')]: {
      margin: '60px 10px 10px'
    }
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px 6px 0 0',
    padding: '15px !important'
  },
  cardHeaderItem: {
    position: 'relative',
    marginRight: 20,
    paddingLeft: 25,
    marginBottom: 15
  },
  cardHeaderLink: {
    position: 'relative',
    marginRight: 20,
    paddingLeft: 25,
    color: theme.palette.primary.dark
  },
  cardHeaderIcon: {
    position: 'absolute',
    left: 0,
    color: theme.palette.primary.dark
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
          <Grid xs={12} item className={classes.cardHeader}>
            <Grid container>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.servings && (
                  <span>
                    <PieChartIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Servings: {frontmatter.servings}
                  </span>
                )}
              </Grid>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.rating && (
                  <span>
                    <StarIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Rating: {frontmatter.rating}
                  </span>
                )}
              </Grid>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.ease && (
                  <span>
                    <FitnessCenterIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Difficulty: {frontmatter.ease}
                  </span>
                )}
              </Grid>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.category && (
                  <span>
                    <RestaurantIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Category: {frontmatter.category}
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.totalTime && (
                  <span>
                    <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Total: {frontmatter.totalTime}
                  </span>
                )}
              </Grid>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.cookTime && (
                  <span>
                    <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Cook: {frontmatter.cookTime}
                  </span>
                )}
              </Grid>
              <Grid item className={classes.cardHeaderItem}>
                {frontmatter.prepTime && (
                  <span>
                    <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                    Prep: {frontmatter.prepTime}
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid container>
              {frontmatter.href && (
                <a href={frontmatter.href} target="_blank" rel="noopener noreferrer" className={classes.cardHeaderLink}>
                  <LinkIcon fontSize="small" className={classes.cardHeaderIcon} />
                  {frontmatter.href}
                </a>
              )}
            </Grid>
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
          <Divider dark />
          <Grid xs={12} item>
            <Typography variant="h5" component="h2" className={classes.item}>
              Notes:
            </Typography>

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
        directions
        category
        cookTime
        ease
        hasBeenTested
        href
        id
        ingredients
        notes
        path
        prepTime
        rating
        servings
        slug
        subcategory
        thumbnail
        title
        totalTime
      }
    }
  }
`
