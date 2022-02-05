import { Box, Paper } from "@mui/material";
import './simpleCart.scss';
import { connect } from 'react-redux';

function SimpleCart(props) {
  return (props.cart.length ? <Box className='simpleCart'>
    <Paper elevation={6}>
      <div className="simpleCart__contents">
        <ul>
          {props.cart.map(product => <li>{product.displayName}</li>)}
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

export default connect(mapStateToProps)(SimpleCart)