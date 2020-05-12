// MUI Core
import { makeStyles } from '@material-ui/core/styles'

const headerStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.lightText,
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 240px)',
      marginLeft: 240
    }
  },
  header: {
    textTransform: 'uppercase'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
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
