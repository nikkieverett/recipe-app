import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  content: {
    flexGrow: 1,
    borderRadius: '10px 0 0 10px',
    backgroundColor: '#EEEDE4',
    zIndex: 100000000,
    paddingLeft: '20px',
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)'
  },
  header : {
    textTransform: 'capitalize',
    margin: '15px 15px 5px 15px'
  }
}))

export default appStyles
