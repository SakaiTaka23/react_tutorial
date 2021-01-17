import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  return (
    <div>
      <Typography variant='h3'>modal content</Typography>
      <Button>
        <FaTimes />
      </Button>
    </div>
  );
};

export default Modal;
