import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh',
    paddingTop: 126
  },
  content: {
    flexGrow: 1
  }
}))

export default appStyles
