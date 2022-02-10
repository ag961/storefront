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
            <>
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
                      <p className="list__paragraph1">Price: ${product.price}</p>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <p className="list__paragraph2"> Qty: {product.orderedQuantity}</p>
                        <Divider orientation="vertical" flexItem />
                        <p className="list__paragraph2 list__delete" onClick={() => { props.deleteFromCart(product) }}>Delete</p>
                      </Box>
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </>
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