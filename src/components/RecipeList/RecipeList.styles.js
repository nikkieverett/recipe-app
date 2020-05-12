import { makeStyles } from '@material-ui/core/styles'

const recipeListStyles = makeStyles(theme => ({
  content: {
    padding: '15px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridAutoRows: '1fr',
    gridGap: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto'
    }
  },
  gridListItem: {
    margin: '10px 5px'
  }
}))

export default recipeListStyles
