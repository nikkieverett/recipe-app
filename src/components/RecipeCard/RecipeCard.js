import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux'

// MUI
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

// Custom components
import StarRating from './StarRating'

// Styles
import recipeCardStyles from './RecipeCard.styles'

// Store
import { setCurrentRecipe } from '../../store/actions'

const RecipeCard = ({ title, category, rating, ease, totalTime, path, hasBeenTested, thumbnail, dispatch, needsMarinade }) => {
  const classes = recipeCardStyles()

  return (
    <Link className={classes.link} to={path} onClick={() => dispatch(setCurrentRecipe(title))}>
      <Card className={classes.root}>
        <CardContent className={classes.cardRoot}>
          <div className={classes.cardImageContainer}>
            {thumbnail && <img src={thumbnail} className={classes.cardImage} />}
            {!thumbnail && (
              <div className={classes.cardImage}>
                <CameraAltIcon className={classes.noPhotoIcon}></CameraAltIcon>
              </div>
            )}
          </div>
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
            {totalTime && (
              <div className={classes.cardBodyItem}>
                <AccessTimeIcon fontSize="small" className={classes.cardBodyIcon} />
                {totalTime}
              </div>
            )}
            {needsMarinade && (
              <div className={classes.cardBodyItem}>
                <CheckBoxIcon fontSize="small" className={classes.cardBodyIcon} />
                Needs to be marinated
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

RecipeCard.propTypes = {
  category: PropTypes.any,
  ease: PropTypes.any,
  hasBeenTested: PropTypes.any,
  rating: PropTypes.any,
  title: PropTypes.any,
  totalTime: PropTypes.any,
  thumbnail: PropTypes.any
}

export default connect(null)(RecipeCard)
