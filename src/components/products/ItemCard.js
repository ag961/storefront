import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import { addToCart } from '../../store/cart';
import { connect } from 'react-redux';
import { When } from 'react-if';



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
          <Typography sx={{ lineHeight: 2 }} variant="p" component="div" color={"text.secondary"}>
            Price: ${props.product.price}
          </Typography>


          <When condition={props.product.count}>
            <Typography key={props.product.count} variant="p" component="div" color={"success.main"}>
              In Stock: {props.product.count}
            </Typography>
          </When>

          <When condition={!props.product.count}>
            <Typography variant="p" component="div" color={"error.main"}>
              Out of Stock.
            </Typography>
          </When>
        </CardContent>
        <CardActions>
          <Button disabled={props.product.count > 0 ? false : true} onClick={() => { props.addToCart(props.product) }}>Add to Cart</Button>
          <Button>View Details</Button>
        </CardActions>
      </Card>
    </>
  )
}

const mapDisptachToProps = { addToCart };

export default connect(null, mapDisptachToProps)(itemCard);