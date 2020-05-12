import { makeStyles } from '@material-ui/core/styles'

const recipeCardStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255, 152, 138, .2)',
    boxShadow: '0px 8px 10px -7px rgba(203, 101, 87, 1)',
    '&:hover': {
      boxShadow: '0px 11px 15px -7px rgba(203, 101, 87, 1)'
    }
  },
  cardTitle: {
    fontWeight: 300,
    lineHeight: 1.2,
    color: theme.palette.primary.dark
  },
  cardBodyIcon: {
    color: theme.palette.secondary.contrastText,
    position: 'absolute',
    left: 0
  },
  cardBodyItem: {
    position: 'relative',
    paddingLeft: 30,
    fontSize: 16,
    paddingTop: 5,
    color: theme.palette.secondary.contrastText,
    textTransform: 'uppercase'
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
    margin: '-15px -15px 10px',
    padding: '15px 15px',
    borderRadius: theme.shape.borderRadius,
    textTransform: 'uppercase'
  }
}))

export default recipeCardStyles
