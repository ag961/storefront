import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';



function itemCard(props) {


  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Image will go here
          </Typography>
          <Typography variant="h5" component="div">
            {props.product.displayName}
          </Typography>
          <Typography variant="p" component="div">
            Count: {props.product.count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => {
            console.log('itemCard props', props)
            props.addToCart(props.product)
          }}>Add to Cart</Button>
          <Button>View Details</Button>
        </CardActions>
      </Card>
    </>
  )
}

const mapDisptachToProps = { addToCart };

export default connect(null, mapDisptachToProps)(itemCard);