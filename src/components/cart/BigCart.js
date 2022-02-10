import { connect } from 'react-redux';
import { Box, Paper } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import './simpleCart.scss';
import { deleteFromCart } from '../../store/cart';

function BigCart(props) {

  let total = props.cart.reduce((initialValue, product) => {
    // let product1subtotal = product1.price * product1.orderedQuantity;
    // let product2subtotal = product2.price * product2.orderedQuantity;
    console.log('product1', initialValue);
    return initialValue + (product.price * product.orderedQuantity);
  }, 0)

  console.log('Total:', total);

  return (<Box className='bigCart'>
    <Paper>
      <div className="bigCart__contents">
        <h2>SHOPPING CART</h2>
        <ul>
          {props.cart.map((product, i) => <li key={i}><Box className="simpleCart__item"><span>{product.displayName}</span><span>Price: ${product.price}</span> X <span>Quantity: {product.orderedQuantity}</span> <span>Subtotal for item: ${product.price * product.orderedQuantity}</span><HighlightOffIcon style={{ color: 'red' }} onClick={() => { props.deleteFromCart(product) }} /></Box></li>)}
        </ul>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{minWidth: '10rem'}}>
          {!props.cart.length ? 'Your cart is empty' : <h3>Total: ${total}</h3>}
        </Box>
      </Box>
    </Paper>
  </Box>)
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart
  }
}

const mapDisptachToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDisptachToProps)(BigCart)