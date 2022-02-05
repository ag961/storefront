import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import SimpleCart from './components/cart/SimpleCart';
import { Box } from "@mui/material";

function App() {

  return (
    <>
      <div id="all-container">
        <div id="content-container">
          <Header />
          <Categories />
          <Box className='bodyContainer'>
            <Products />
          </Box>
          <SimpleCart />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
