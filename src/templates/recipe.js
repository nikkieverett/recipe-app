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

import RecipeCardHeader from '../components/Header/RecipeCardHeader'
import RecipeCardNavigation from '../components/Navigation/RecipeCardNavigation'

const recipeStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(255, 152, 138, .2)',
    minHeight: '100vh',
    color: theme.palette.primary.contrastText
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    margin: '80px 40px 40px',
    backgroundColor: 'rgba(255, 152, 138, .5)',
    padding: 20,
    color: theme.palette.primary.contrastText,
    '& li': {
      marginBottom: 15
    },
    [theme.breakpoints.down('sm')]: {
      margin: '55px 0 0',
      padding: '10px 0',
      overflow: 'hidden'
    }
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px 6px 0 0',
    padding: '15px !important',
    borderBottom: `10px solid ${theme.palette.secondary.main}`,
    marginBottom: 20
  },
  cardHeaderTitle: {
    marginBottom: 20,
    textTransform: 'capitalize'
  },
  cardHeaderItem: {
    position: 'relative',
    textTransform: 'capitalize',
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
  },
  cardBody: {
    maxWidth: 1040,
    padding: '0px 20px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      maxWidth: '100vw'
    }
  },
  cardNotes: {
    borderTop: `4px solid ${theme.palette.secondary.dark}`
  }
}))

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const classes = recipeStyles()
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <div className="recipe-card">
      <div className={classes.root}>
        <RecipeCardHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} frontmatter={frontmatter} />
        <RecipeCardNavigation mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} frontmatter={frontmatter} />
        <Paper className={classes.card}>
          <Grid container justify="center" spacing={2}>
            <Grid xs={12} item className={classes.cardHeader}>
              <Typography variant="h4" component="h2" className={classes.cardHeaderTitle}>
                {frontmatter.title}
              </Typography>
              <Grid container>
                {frontmatter.servings && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <PieChartIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Servings: {frontmatter.servings}
                    </span>
                  </Grid>
                )}
                {frontmatter.rating && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <StarIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Rating: {frontmatter.rating}
                    </span>
                  </Grid>
                )}
                {frontmatter.ease && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <FitnessCenterIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Difficulty: {frontmatter.ease}
                    </span>
                  </Grid>
                )}
                {frontmatter.category && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <RestaurantIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Category: {frontmatter.category}
                    </span>
                  </Grid>
                )}
              </Grid>
              <Grid container>
                {frontmatter.totalTime && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Total: {frontmatter.totalTime}
                    </span>
                  </Grid>
                )}
                {frontmatter.cookTime && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Cook: {frontmatter.cookTime}
                    </span>
                  </Grid>
                )}
                {frontmatter.prepTime && (
                  <Grid item className={classes.cardHeaderItem}>
                    <span>
                      <AccessTimeIcon fontSize="small" className={classes.cardHeaderIcon} />
                      Prep: {frontmatter.prepTime}
                    </span>
                  </Grid>
                )}
              </Grid>
              {frontmatter.href && (
                <Grid container>
                  <a href={frontmatter.href} target="_blank" rel="noopener noreferrer" className={classes.cardHeaderLink}>
                    <LinkIcon fontSize="small" className={classes.cardHeaderIcon} />
                    {frontmatter.href}
                  </a>
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2} className={classes.cardBody}>
            <Grid key={1} xs={12} sm={6} item>
              <Typography variant="h5" component="h2" className={classes.item}>
                Ingredients:
              </Typography>
              <ReactMarkdown source={frontmatter.ingredients} className={classes.cardList} />
            </Grid>
            <Grid key={0} xs={12} sm={6} item>
              <Typography variant="h5" component="h2" className={classes.item}>
                Directions:
              </Typography>
              <ReactMarkdown source={frontmatter.directions} className={classes.cardList} />
            </Grid>
            {frontmatter.nutritionFacts && (
              <Grid xs={12} item className={classes.cardNotes}>
                <Typography variant="h5" component="h2" className={classes.item}>
                  Nutrition Facts:
                </Typography>
                <ReactMarkdown source={frontmatter.nutritionFacts} />
              </Grid>
            )}
            {frontmatter.notes && (
              <Grid xs={12} item className={classes.cardNotes}>
                <Typography variant="h5" component="h2" className={classes.item}>
                  Notes:
                </Typography>
                <ReactMarkdown source={frontmatter.notes} />
              </Grid>
            )}
          </Grid>
        </Paper>
      </div>
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
        subcategory
        thumbnail
        title
        nutritionFacts
        totalTime
      }
    }
  }
`
