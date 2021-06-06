import { makeStyles } from '@material-ui/core/styles'

const recipeStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(255, 152, 138, .2)',
    minHeight: '100vh',
    width: '100%',
    color: theme.palette.primary.contrastText
  },
  card: {
    margin: '15px',
    backgroundColor: 'rgba(255, 152, 138, .5)',
    color: theme.palette.primary.contrastText,
    '& li': {
      marginBottom: 15
    },
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0 0',
      padding: '0',
      overflow: 'hidden',
      width: '100%'
    }
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '6px 6px 0 0',
    padding: '15px !important',
    borderBottom: `10px solid ${theme.palette.secondary.main}`,
    marginBottom: 20,
    position: 'relative'
  },
  cardHeaderTitle: {
    marginBottom: 20,
    textTransform: 'capitalize',
    position: 'relative'
  },
  cardHeaderItem: {
    position: 'relative',
    textTransform: 'capitalize',
    marginRight: 20,
    paddingLeft: 25,
    marginBottom: 15
  },
  cardHeaderLink: {
    position: 'relative',
    marginRight: 20,
    paddingLeft: 25,
    color: theme.palette.primary.dark
  },
  cardHeaderIcon: {
    position: 'absolute',
    left: 0,
    color: theme.palette.primary.dark
  },
  cardBody: {
    padding: '0px 20px 20px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100vw'
    }
  },
  cardBodyItem: {
    position: 'relative',
    textTransform: 'capitalize',
    marginRight: 20,
    paddingLeft: 25,
    marginBottom: 15,
    fontSize: 16
  },
  cardBodyIcon: {
    position: 'absolute',
    left: 0,
    fontSize: 22,
    color: theme.palette.primary.dark
  },
  cardNotes: {
    borderTop: `4px solid ${theme.palette.secondary.dark}`,
    paddingTop: 20,
    marginTop: 10
  },
  cardList: {
    fontSize: 16
  },
  cardBadge: {
    position: 'absolute',
    right: 0,
    top: 0
  },
  cardBadgeIcon: {
    fontSize: 20,
    float: 'left'
  },
  cardBadgeText: {
    fontSize: 16,
    float: 'left',
    padding: '2px 5px 0 0'
  },
  editIcon: {
    position: 'absolute',
    right: '15px',
    cursor: 'pointer',
    zIndex: 10
  }
}))

export default recipeStyles