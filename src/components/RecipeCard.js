import PropTypes from 'prop-types'
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import StarRating from './StarRating'

// Styles
import recipeCardStyles from './RecipeCard.styles'

const RecipeCard = ({ title, category, rating, ease, totalTime, path }) => {
  const handleClick = () => {
    const newPath = path.slice(1)

    // TODO: use react router instead of manually setting window location
    window.location += newPath
  }

  const classes = recipeCardStyles()

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.item}>
          {title}
        </Typography>
        <Typography variant="subtitle1">{category}</Typography>
        <StarRating rating={rating} />
        <List>
          <ListItem>Difficulty: {ease}</ListItem>
          <ListItem>Total Time: {totalTime}</ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined" onClick={handleClick}>
          View More
        </Button>
      </CardActions>
    </Card>
  )
}

RecipeCard.propTypes = {
  category: PropTypes.any,
  ease: PropTypes.any,
  path: PropTypes.string,
  rating: PropTypes.any,
  title: PropTypes.any,
  totalTime: PropTypes.any
}

export default RecipeCard
