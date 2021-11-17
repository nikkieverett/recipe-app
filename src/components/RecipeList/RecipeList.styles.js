import { makeStyles } from '@material-ui/core/styles'

const recipeListStyles = makeStyles(theme => ({
  content: {
    padding: '15px',
    minHeight: '100vh'
  },
  gridListItem: {
    margin: '10px 5px'
  }
}))

export default recipeListStyles
