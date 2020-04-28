// MUI Core
import { makeStyles } from '@material-ui/core/styles'

const headerStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 240px)',
      marginLeft: 240
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
