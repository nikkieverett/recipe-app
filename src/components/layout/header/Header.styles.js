// MUI Core
import { makeStyles } from '@material-ui/core/styles'

const headerStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  header: {
    textTransform: 'capitalize'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

export default headerStyles
