import './header.scss';
import { AppBar, Toolbar, Typography } from "@mui/material";
import '../../app.scss';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Virtual Store
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header