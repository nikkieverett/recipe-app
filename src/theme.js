import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffa395',
      main: '#dc7367',
      dark: '#a6453c',
      contrastText: '#000',
      lightText: '#fff'
    },
    secondary: {
      light: '#b7f4ef',
      main: '#86c1bd',
      dark: '#57918d',
      contrastText: '#000',
      lightText: '#fff'
    }
  }
})

export default theme
