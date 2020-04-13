import React from "react"
import { makeStyles } from "@material-ui/core/styles"
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

const useStyles = makeStyles({
  root: {
    height: 300,
    position: "relative"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    textTransform: "capitalize",
  },
  pos: {
    position: "absolute",
    bottom: 12
  },
})

const RecipeCard = ({title, category, rating, totalTime, ease}) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.title}>
          {category}
        </Typography>
        <StarRating rating={rating} />
        <List>
          <ListItem>Difficulty: {ease}</ListItem>
          <ListItem>Total Time: {totalTime}</ListItem>
        </List>
      </CardContent>
      <CardActions className={classes.pos}>
        <Button variant="contained" size="small" color="primary">
          View More
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard