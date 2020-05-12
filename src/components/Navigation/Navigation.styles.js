import { makeStyles } from '@material-ui/core/styles'

const navigationStyles = makeStyles(theme => ({
  drawer: {
    textTransform: 'uppercase',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)',
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0
    }
  },
  toolbar: {
    height: 200
  },
  icon: {
    width: 40,
    minWidth: 40
  },
  listItem: {
    textTransform: 'uppercase'
  },
  drawerPaper: {
    width: 240,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.constrastText,
    textTransform: 'uppercase'
  },
  recipeCardDrawer: {
    width: 240,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)',
    color: theme.palette.secondary.constrastText
  }
}))

export default navigationStyles
