import { Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

type SingleColorProp = {
  colorCode: string;
};

const SingleColor: React.FC<SingleColorProp> = ({ colorCode }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Paper
      variant='outlined'
      square
      style={{ backgroundColor: colorCode }}
      onClick={() => {
        navigator.clipboard.writeText(colorCode);
        setAlert(true);
      }}
    >
      {colorCode}
      {alert && <Typography>copied!</Typography>}
    </Paper>
  );
};

export default SingleColor;
