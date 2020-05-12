import { makeStyles } from '@material-ui/core/styles'

const searchBarStyles = makeStyles(theme => ({
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    padding: '2px 4px 2px 12px',
    display: 'flex',
    alignItems: 'center'
  },
  body: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'relative',
      height: 50,
      margin: '10px 15px',
      width: 'calc(100vw - 30px)',
      right: 0
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  header: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'inline-block',
      width: '25ch',
      position: 'absolute',
      right: 10,
      top: 8
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}))

export default searchBarStyles
