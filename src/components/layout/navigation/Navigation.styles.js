import { makeStyles } from '@material-ui/core/styles'

const navigationStyles = makeStyles(theme => ({
  drawer: {
    textTransform: 'capitalize',
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0
    }
  },
  toolbar: {
    height: 200
  },
  drawerPaper: {
    width: 240
  }
}))

export default navigationStyles
