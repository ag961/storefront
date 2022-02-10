import './header.scss';
import '../../app.scss';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { connect } from 'react-redux';


function Header(props) {
  return (
    <AppBar position="static" sx={{
      bgcolor: "rgb(8, 14, 29)"
    }}>
      <Toolbar disableGutters={true} sx={{ display: "flex", justifyContent: "space-between", pl: "1rem", pr: "0.5rem" }}>
        <Typography variant="h4">
          <Link className="storeLogo" to="/">
            Virtual Store
          </Link>
        </Typography>

        <Link className="cartIcon" to="/cart">
          <IconButton size="large" aria-label="cart" color="inherit">
            <Badge badgeContent={props.badgeCount} color="error">
              <ShoppingCartTwoToneIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = (state) => {
  return {
    badgeCount: state.cartReducer.totalCount
  }
}


export default connect(mapStateToProps)(Header);