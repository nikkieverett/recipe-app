import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  content: {
    flexGrow: 1,
    borderRadius: '10px 0 0 10px',
    backgroundColor: '#EEEDE4',
    zIndex: 100000000,
    padding: '0 20px',
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)'
  },
  header : {
    textTransform: 'capitalize',
    margin: '15px 15px 5px 15px'
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    }
  },
  secondaryLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.palette.secondary.dark,
    position: 'relative',
    marginLeft: '20px',
    '&::before': {
      content: '"/"',
      left: -12,
      position: 'absolute'
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    }
  },
  selectedRecipe: {
    color: theme.palette.secondary.dark,
  }
}))

export default appStyles
