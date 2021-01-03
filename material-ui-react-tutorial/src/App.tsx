import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';

import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg,#333,#999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function ButtonStyled(): JSX.Element {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample(): JSX.Element {
  const [checked, setChecked] = React.useState<boolean>(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<DeleteIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label='Testing Chekbox'
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant='h6'>MUI Themeing</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

            <Typography variant='h1' component='div'>
              Welcome to MUI
            </Typography>
            <Typography variant='subtitle1'>Welcome to MUI</Typography>
            <ButtonStyled />

            <Grid container spacing={4} justify='center'>
              <Grid item xs={12}>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
              <Grid item>
                <Paper style={{ height: 75, width: 50 }} />
              </Grid>
            </Grid>

            <TextField variant='filled' color='secondary' type='time' label='The Time' />
            <CheckboxExample />
            <ButtonGroup variant='contained' color='primary' size='large'>
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Delete</Button>
            </ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              size='large'
              onClick={() => alert('hi')}
              variant='contained'
              color='primary'
            >
              Hello World
            </Button>
            <img src={logo} className='App-logo' alt='logo' />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
