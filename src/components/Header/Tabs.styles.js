import { makeStyles } from '@material-ui/core/styles'

const tabStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 48,
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 11px 15px -7px rgba(203, 101, 87, 1)'
  }
}))

export default tabStyles
