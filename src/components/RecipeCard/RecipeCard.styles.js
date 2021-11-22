import { makeStyles } from '@material-ui/core/styles'

const recipeCardStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    padding: '0',
    textTransform: 'capitalize',
    backgroundColor: 'rgba(255, 152, 138, .2)',
    boxShadow: '0px 8px 10px -7px rgba(203, 101, 87, 1)',
    '&:hover': {
      boxShadow: '0px 11px 15px -7px rgba(203, 101, 87, 1)'
    },
    marginBottom: '20px'
  },
  cardRoot: {
    padding: 0
  },
  cardImageContainer: {
    height: '150px',
    width: '100%'
  },
  cardImage: {
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  noPhotoIcon: {
    color: theme.palette.primary.dark,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  cardTitle: {
    fontWeight: 300,
    lineHeight: 1.2,
    color: theme.palette.primary.dark,
    marginBottom: 10
  },
  cardBodyIcon: {
    color: theme.palette.secondary.contrastText,
    position: 'absolute',
    left: 10
  },
  cardBodyItem: {
    position: 'relative',
    paddingLeft: 40,
    fontSize: 14,
    paddingTop: 5,
    color: theme.palette.secondary.contrastText,
    textTransform: 'uppercase'
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
    padding: '15px 15px',
    borderRadius: '0 0 4px 4px',
    textTransform: 'uppercase',
    marginBottom: '10px'
  },
  cardFooter: {
    position: 'absolute',
    left: 20,
    bottom: 10,
    color: theme.palette.secondary.contrastText
  },
  cardBadgeIcon: {
    fontSize: 20,
    float: 'left',
    padding: '0 3px 0 0'
  },
  cardBadgeText: {
    fontSize: 12,
    float: 'left',
    padding: 3
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '10px',
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    display: 'block',
    color: theme.palette.primary.dark,
    '&:hover': {
      color: `rgba(${theme.palette.primary.contrastText}, .5)`
    }
  }
}))

export default recipeCardStyles
