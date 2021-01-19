import PropTypes from 'prop-types'
import React from 'react'

// MUI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

// Custom components
import StarRating from './StarRating'

// Styles
import recipeCardStyles from './RecipeCard.styles'

const RecipeCard = ({ title, category, rating, ease, totalTime, path, hasBeenTested }) => {
  const handleClick = () => {
    const newPath = path.slice(1)

    // TODO: use react router instead of manually setting window location
    window.location += newPath
  }

  const classes = recipeCardStyles()

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardContent>
        <div className={classes.cardHeader}>
          <Typography variant="h6" component="h3" className={classes.cardTitle}>
            {title}
          </Typography>
          <StarRating rating={rating} />
        </div>
        <div>
          {category && (
            <div className={classes.cardBodyItem}>
              <RestaurantIcon fontSize="small" className={classes.cardBodyIcon} />
              {category}
            </div>
          )}
          {ease && (
            <div className={classes.cardBodyItem}>
              <FitnessCenterIcon fontSize="small" className={classes.cardBodyIcon} />
              {ease}
            </div>
          )}
          {totalTime && (
            <div className={classes.cardBodyItem}>
              <AccessTimeIcon fontSize="small" className={classes.cardBodyIcon} />
              {totalTime}
            </div>
          )}
          {hasBeenTested && (
            <div className={classes.cardFooter}>
              <div className={classes.cardBadge}>
                <VerifiedUserIcon className={classes.cardBadgeIcon} />
                <span className={classes.cardBadgeText}>Tested </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

RecipeCard.propTypes = {
  category: PropTypes.any,
  ease: PropTypes.any,
  hasBeenTested: PropTypes.any,
  rating: PropTypes.any,
  title: PropTypes.any,
  totalTime: PropTypes.any
}

export default RecipeCard
