import { makeStyles } from '@material-ui/core/styles'

const recipeListStyles = makeStyles(theme => ({
  content: {
    minHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  gridListItem: {
    marginBottom: '10px',
    height: 400,
    width: '20%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))

export default recipeListStyles
