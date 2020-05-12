import { makeStyles } from '@material-ui/core/styles'

const navigationStyles = makeStyles(theme => ({
  drawer: {
    textTransform: 'uppercase',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0px 11px 15px -7px rgba(${theme.palette.secondary.dark}, 0.2),0px 24px 38px 3px rgba(${theme.palette.secondary.dark} ,0.14),0px 9px 46px 8px rgba(${theme.palette.secondary.dark}, 0.12)`,
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0
    }
  },
  toolbar: {
    height: 200
  },
  icon: {
    minWidth: 40
  },
  listItem: {
    textTransform: 'uppercase'
  },
  drawerPaper: {
    width: 240,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.lightText,
    textTransform: 'uppercase'
  },
  recipeCardDrawer: {
    width: 240,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0px 11px 15px -7px rgba(${theme.palette.secondary.dark}, 0.2),0px 24px 38px 3px rgba(${theme.palette.secondary.dark} ,0.14),0px 9px 46px 8px rgba(${theme.palette.secondary.dark}, 0.12)`,
    color: theme.palette.primary.lightText
  }
}))

export default navigationStyles
