import { makeStyles } from '@material-ui/core/styles'

const recipeCardStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative',
    pointer: 'cursor',
    textTransform: 'capitalize'
  },
  cardTitle: {
    fontWeight: 300,
    lineHeight: 1.2
  },
  cardBodyIcon: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    left: 0
  },
  cardBodyItem: {
    position: 'relative',
    paddingLeft: 30,
    paddingTop: 5
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
    margin: '-15px -15px 10px',
    padding: '15px 15px',
    borderRadius: theme.shape.borderRadius
  }
}))

export default recipeCardStyles
