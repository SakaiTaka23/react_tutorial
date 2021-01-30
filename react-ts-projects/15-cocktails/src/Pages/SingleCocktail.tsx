import { Grid, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useStyles } from '../Theme';

type SingleCocktailProps = RouteComponentProps<{
  id: string;
}>;

type Detail = {
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  img: string;
};

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail: FC<SingleCocktailProps> = (props) => {
  const classes = useStyles();
  const [detail, setDetail] = useState<Detail>({ name: '', category: '', alcoholic: '', glass: '', img: '' });
  const id = props.match.params.id;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await (await fetch(url + id)).json();
      const { drinks } = response;
      if (drinks) {
        const { strDrink, strCategory, strAlcoholic, strGlass, strDrinkThumb } = drinks[0];
        const newDetail = {
          name: strDrink,
          category: strCategory,
          alcoholic: strAlcoholic,
          glass: strGlass,
          img: strDrinkThumb,
        };
        setDetail(newDetail);
      } else {
        console.log('id error');
      }
    };
    fetchDetails();
  }, [id]);

  console.log(detail);

  return (
    <Grid
      className={`${classes.glass} items detail-top`}
      container
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Grid item>
        <Link to='/'>BACK HOME</Link>
        <Typography variant='h4'>{detail.name}</Typography>
      </Grid>
      <Grid item container direction='row' justify='center'>
        <Grid item>
          <img src={detail.img} alt={detail.name} />
        </Grid>
        <Grid className='detail' item>
          <Typography variant='h6'>Name : {detail.name}</Typography>
          <Typography variant='h6'>Category : {detail.category}</Typography>
          <Typography variant='h6'>Alcoholic : {detail.alcoholic}</Typography>
          <Typography variant='h6'>Glass : {detail.glass}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleCocktail;
