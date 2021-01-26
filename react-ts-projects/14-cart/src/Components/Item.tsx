import { Button, Grid, makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { FC, useContext } from 'react';
import { CartContext } from '../CartContext';
import { CART_ACTIONS, Item } from '../CartReducer';

const useStyles = makeStyles({
  img: {
    width: '80px',
    margin: '5px',
  },
  amount: {
    margin: '30px',
  },
});

const SingleItem: FC<Item> = ({ id, title, price, img, amount }) => {
  const classes = useStyles();

  const { CartDispatch } = useContext(CartContext);

  return (
    <Grid container alignContent='space-around' alignItems='center' direction='row'>
      <Grid item xs={3}>
        <img src={img} alt={title} className={classes.img} />
      </Grid>

      <Grid item xs={6}>
        <h3>{title}</h3>
        <h4>$ {price}</h4>
        <Button color='secondary' onClick={() => CartDispatch({ type: CART_ACTIONS.DELETE, payload: { id: id } })}>
          remove
        </Button>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction='column' justify='space-between' alignItems='flex-end'>
          <Button color='primary' onClick={() => CartDispatch({ type: CART_ACTIONS.ADD, payload: { id: id } })}>
            <ExpandLessIcon />
          </Button>
          <h3 className={classes.amount}>{amount}</h3>
          <Button
            color='primary'
            onClick={
              amount === 1
                ? () => CartDispatch({ type: CART_ACTIONS.DELETE, payload: { id: id } })
                : () => CartDispatch({ type: CART_ACTIONS.SUB, payload: { id: id } })
            }
          >
            <ExpandMoreIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleItem;
