import React from 'react'
import {
  createMuiTheme,
  Grid,
  styled,
  TextField,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

const GridStyled = styled(Grid)({
  backgroundColor: '#0e0e10',
  color: 'white',
  boxShadow: '0 2px 5px #999999',
  padding: 8,
})

export const AppNavbar: React.FC<any> = props => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GridStyled container justify='space-between' alignItems='center'>
        <Grid container item xs={4} spacing={1}>
          <Grid item>
            <AppsIcon></AppsIcon>
          </Grid>
          <Grid item>
            <Typography variant='overline'>Example</Typography>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <TextField
            label='Search'
            fullWidth
            size='small'
            variant='outlined'
          ></TextField>
        </Grid>

        <Grid item xs={4}></Grid>
      </GridStyled>
    </ThemeProvider>
  )
}
