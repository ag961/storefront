import { connect } from 'react-redux';
import { Box, Paper } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './simpleCart.scss';
import { deleteFromCart } from '../../store/cart';

function SimpleCart(props) {
  return (props.cart.length ? <Box className='simpleCart'>
    <Paper elevation={6}>
      <div className="simpleCart__contents">
        <ul>
          {props.cart.map((product, i) => <li key={i}><Box className="simpleCart__item"><span>{product.displayName}</span><HighlightOffIcon style={{ color: 'red' }} onClick={()=>{props.deleteFromCart(product)}} /></Box></li>)}
        </ul>
      </div>
    </Paper>
  </Box> : '')
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart
  }
}

const mapDisptachToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDisptachToProps)(SimpleCart)