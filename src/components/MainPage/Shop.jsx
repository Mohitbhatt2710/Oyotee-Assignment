import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Shop() {
  return (

    <>
   

    <Card sx={{ maxWidth: 345, border:"2px solid lightgrey" , borderRadius:"4%" ,marginLeft:"20px" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="./images/flash/flash-7.png"
        title="monsterra plant"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Monstera
        </Typography>
        <div className='rate'>
                  <i className='fa fa-star '></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
        
      </CardContent>
      <CardActions>
        <Button size="small">Price</Button>
        <h2>$45</h2>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Shop