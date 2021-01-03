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
      <div className='App'>
        <header className='App-header'>
          <ButtonStyled />
          <TextField variant='filled' color='secondary' type='time' label='The Time' />
          <CheckboxExample />
          <ButtonGroup variant='contained' color='primary' size='large'>
            <Button startIcon={<SaveIcon />}>Save</Button>
            <Button startIcon={<DeleteIcon />}>Delete</Button>
          </ButtonGroup>
          <Button startIcon={<SaveIcon />} size='large' onClick={() => alert('hi')} variant='contained' color='primary'>
            Hello World
          </Button>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
