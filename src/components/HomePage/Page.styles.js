import { makeStyles } from '@material-ui/core/styles'

const appStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(255, 152, 138, .2)',
    minHeight: '100vh',
    paddingTop: 126
  },
  content: {
    flexGrow: 1
  }
}))

export default appStyles
