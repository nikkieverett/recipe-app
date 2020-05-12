import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa395',
      main: '#dc7367',
      dark: '#a6453c',
      contrastText: 'rgba(148, 57, 51, 1)',
      lightText: 'rgba(255, 152, 138, .5)'
    },
    secondary: {
      light: '#b7f4ef',
      main: '#86c1bd',
      dark: '#57918d',
      contrastText: 'rgba(67, 127, 123, 1)',
      lightText: 'rgba(198, 225, 223, 1)'
    }
  }
})

export default theme
