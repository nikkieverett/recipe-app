import { makeStyles } from '@material-ui/core/styles'

const headerMobileStyles = makeStyles(theme => ({
  root: {
    display: 'none',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 10px 8px 20px'
  }
}))

export default headerMobileStyles
