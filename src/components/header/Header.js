import './header.scss';
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import '../../app.scss';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { connect } from 'react-redux';

function Header(props) {
  return (
    <AppBar position="static" sx={{
      bgcolor: "rgb(8, 14, 29)"
    }}>
      <Toolbar>

        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Virtual Store
        </Typography>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={props.badgeCount} color="error">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </IconButton>

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