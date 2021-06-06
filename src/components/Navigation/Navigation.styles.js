import { darken, makeStyles } from '@material-ui/core/styles'
import { Autocomplete } from '@material-ui/lab'
import Image from './logo-white.png'; // Import using relative path

const navigationStyles = makeStyles(theme => ({
  drawer: {
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 11px 15px -7px rgba(67, 127, 123, 1)',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      flexShrink: 0
    },
  },
  toolbar: {
    height: 200
  },
  icon: {
    width: 40,
    minWidth: 40
  },
  listItem: {
    textTransform: 'uppercase'
  },
  drawerPaper: {
    width: 300,
    backgroundColor: theme.palette.primary.main,
    color: '#EEEDE4',
    border: 'none',
    textTransform: 'uppercase',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  recipeCardDrawer: {
    width: 300,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.constrastText
  },
  selectedSubcategory: {
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
    width: '100%'
  },
  category: {
    width: '100%'
  },
  searchBar: {
    maxWidth: '90%',
    margin: '20px auto'
  },
  logoContainer: {
    width: 150,
    height: 150,
    margin: '40px auto 60px'
  },
  logo: {
    background: `url(${Image})`,
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: '0 auto'
  },
  pageTitle: {
    textAlign: 'center'
  },
  accordion: {
    width: '100%',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    padding: 0,
    color: 'white',
  },
  accordionSelected: {
    backgroundColor: darken(theme.palette.primary.main, .04)
  },
  accordionSummary: {
    padding: 0
  },
  accordionDetails: {
    padding: 0,
    width: '100%'
  },
    link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
    '&:hover': {
      color: `rgba(${theme.palette.primary.contrastText}, .5)`
    }
  }
}))

export default navigationStyles
