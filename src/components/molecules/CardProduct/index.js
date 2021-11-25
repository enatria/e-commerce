import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        maxWidth:280,
        borderRadius: 18,
        backgroundColor:'#fff'
    },
  });

export default function CardProduct() {

    const classes = useStyles()

  return (
    <Box className={classes.root}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5"  color="text.primary" component="div" sx={{fontWeight:'fontWeightBold'}}>
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
        <Typography variant="span" sx={{fontWeight:'fontWeightBold'}}>$200</Typography>
        <Button size="small">Learn More</Button>
      </Box>
    </Box>
  );
}