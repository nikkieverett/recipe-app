import { makeStyles } from '@material-ui/core/styles'

const navigationStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240
  }
}))

export default navigationStyles
