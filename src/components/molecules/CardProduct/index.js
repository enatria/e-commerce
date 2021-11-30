import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Link from '../../atoms/Link';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '../../atoms';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        minHeight:450,
        borderRadius: 18,
        backgroundColor:'#fff'
    },
  });

export default function CardProduct({data, stock}) {

    const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box sx={{ display: 'flex', width: 100, minHeight:'180px',margin: 'auto', padding:3 }}>
        <img src={data.image} style={{width:'100%'}} alt="" />
      </Box>
      <CardContent>
        <Link>
          <Typography gutterBottom sx={{minHeight:'70px', maxHeight:'70px'}}  variant="h5"  color="text.primary" component="div" sx={{fontWeight:'fontWeightBold'}}>
            {data.title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{maxHeight:'60px', minHeight:'60px', overflow:'hidden'}} color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
          <Box sx={{
            paddingLeft:2,
            paddingRight: 2,
            paddingBottom: 2,
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center'
      }}>
        <Typography variant="span" sx={{ fontWeight: 'fontWeightBold' }}>${data.price} {stock}</Typography>
        <Button size="small">Add To Cart</Button>
      </Box>
    </Box>
  );
}