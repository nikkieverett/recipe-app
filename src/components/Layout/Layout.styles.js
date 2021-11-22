import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  content: {
    flexGrow: 1,
    borderRadius: '10px 0 0 10px',
    backgroundColor: '#EEEDE4',
    padding: '0 55px',
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 0
    },
  },
  header : {
    textTransform: 'capitalize',
    padding: '15px 10px 5px 10px'
  },
  link: {
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    }
  },
  secondaryLink: {
    color: theme.palette.secondary.dark,
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    }
  },
  selectedRecipe: {
    color: theme.palette.secondary.dark,
  },
  addNewButton: {
    display: 'none',
    borderRadius: '100px',
    border: 'none',
    backgroundColor: theme.palette.secondary.main,
    height: 50,
    width: 50,
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'fixed',
      bottom: 10,
      right: 10
    },
  }
}))

export default appStyles
