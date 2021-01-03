import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
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
  );
}

export default App;
