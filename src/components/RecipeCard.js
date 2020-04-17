import React, { useCallback } from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import StarRating from './StarRating'
import pageQuery from "../templates/recipe"

class RecipeCard extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { path } = this.props
    const newPath = path.slice(1)

    window.location += newPath
  }

  render() {
    const { title, category, rating, ease, totalTime } = this.props

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {category}
          </Typography>
          <StarRating rating={rating} />
          <List>
            <ListItem>Difficulty: {ease}</ListItem>
            <ListItem>Total Time: {totalTime}</ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={this.handleClick}
          >
            View More
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default RecipeCard