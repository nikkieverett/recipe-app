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
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '25ch',
    position: 'absolute',
    right: 10,
    padding: '2px 4px 2px 12px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

export default headerStyles
