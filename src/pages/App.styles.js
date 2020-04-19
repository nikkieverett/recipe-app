import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default appStyles
