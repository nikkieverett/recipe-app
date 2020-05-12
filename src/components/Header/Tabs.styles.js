import { makeStyles } from '@material-ui/core/styles'

const tabStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 48,
    backgroundColor: theme.palette.primary.main
  }
}))

export default tabStyles
