import './bigCart.scss';

import { connect } from 'react-redux';
import { Box, Paper, List, ListItem, Divider, ListItemText } from "@mui/material";
import { deleteFromCart } from '../../store/cart';

function BigCart(props) {

  let total = props.cart.reduce((initialValue, product) => {
    return initialValue + (product.price * product.orderedQuantity);
  }, 0)

  return (<Box className='bigCart'>
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: '900px' }}>
      <div className="bigCart__contents">
        <h2>Order Summary</h2>
        <Divider />
        <List>
          {props.cart.map((product, i) => (
            <div key={i}>
              <ListItem disableGutters={true}>
                <ListItemText
                  primary={<Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                    <span>
                      {product.displayName}
                    </span>
                    <span>
                      ${product.price * product.orderedQuantity}
                    </span>
                  </Box>
                  }
                  secondary={
                    <>
                      <span className="list__paragraph1">Price: ${product.price}</span>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <span className="list__paragraph2"> Qty: {product.orderedQuantity}</span>
                        <Divider orientation="vertical" flexItem />
                        <span className="list__paragraph2 list__delete" onClick={() => { props.deleteFromCart(product) }}>Delete</span>
                      </Box>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </List>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ minWidth: '10rem' }}>
          <h3>Total ({props.totalItems} items) :</h3>
        </Box>
        <Box>
          <h3>${total}</h3>
        </Box>
      </Box>
    </Paper>
  </Box>)
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    totalItems: state.cartReducer.totalCount
  }
}

const mapDisptachToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDisptachToProps)(BigCart)