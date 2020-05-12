import { makeStyles } from '@material-ui/core/styles'

const recipeCardStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'capitalize',
    boxShadow: `0px 11px 15px -7px rgba(${theme.palette.primary.dark}, 0.2),0px 24px 38px 3px rgba(${theme.palette.primary.dark} ,0.14),0px 9px 46px 8px rgba(${theme.palette.secondary.dark}, 0.12)`
  },
  cardTitle: {
    fontWeight: 300,
    lineHeight: 1.2,
    color: theme.palette.primary.dark
  },
  cardBodyIcon: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    left: 0
  },
  cardBodyItem: {
    position: 'relative',
    paddingLeft: 30,
    paddingTop: 5,
    color: theme.palette.secondary.dark
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
    margin: '-15px -15px 10px',
    padding: '15px 15px',
    borderRadius: theme.shape.borderRadius
  }
}))

export default recipeCardStyles
