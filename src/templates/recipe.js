import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { graphql } from 'gatsby'
import { connect } from 'react-redux'

// MUI Components
import Typography from '@material-ui/core/Typography'
import PieChartIcon from '@material-ui/icons/PieChart'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import LinkIcon from '@material-ui/icons/Link'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import EditIcon from '@material-ui/icons/Edit'

// Styles
import recipeStyles from './Recipe.styles'

// Store
import { setCurrentRecipe } from '../store/actions'

const Template = ({ data, dispatch }) => {
  const classes = recipeStyles()
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const handleEditRecipe = () => {
    const URL = `${window.location.origin}/admin/#/collections/recipe/entries${frontmatter.path}`

    window.open(URL, '_blank')
  }

  useEffect(() => {
    dispatch(setCurrentRecipe(frontmatter.title))
  }, [])

  return (
    <Paper className={classes.card}>
      <Grid container justify="center">
        <Grid xs={12} item className={classes.cardHeader}>
          <span className={classes.editIcon} onClick={() => handleEditRecipe()}><EditIcon /></span>
          <Typography variant="h4" component="h2" className={classes.cardHeaderTitle}>
            {frontmatter.title}
            {frontmatter.hasBeenTested && (
              <div className={classes.cardBadge}>
                <span className={classes.cardBadgeText}>Tested: </span>
                <VerifiedUserIcon className={classes.cardBadgeIcon} />
              </div>
            )}
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
      <Grid container justify="center" className={classes.cardBody}>
        <Grid container>
          {frontmatter.prepTime && (
            <Grid item className={classes.cardBodyItem}>
              <span>
                <AccessTimeIcon fontSize="small" className={classes.cardBodyIcon} />
                Prep: {frontmatter.prepTime}
              </span>
            </Grid>
          )}
          {frontmatter.cookTime && (
            <Grid item className={classes.cardBodyItem}>
              <span>
                <AccessTimeIcon fontSize="small" className={classes.cardBodyIcon} />
                Cook: {frontmatter.cookTime}
              </span>
            </Grid>
          )}
          {frontmatter.totalTime && (
            <Grid item className={classes.cardBodyItem}>
              <span>
                <AccessTimeIcon fontSize="small" className={classes.cardBodyIcon} />
                Total: {frontmatter.totalTime}
              </span>
            </Grid>
          )}
        </Grid>
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
  )
}

Template.propTypes = {
  data: PropTypes.any
}

export default connect(null)(Template)

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
