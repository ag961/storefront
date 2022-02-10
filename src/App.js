import './app.scss';
import { Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import SimpleCart from './components/cart/SimpleCart';
import BigCart from './components/cart/BigCart';

function App() {

  return (
    <>
      <div id="all-container">
        <div id="content-container">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Categories />
                <SimpleCart />
                <Box className='bodyContainer'>
                  <Products />
                </Box>
              </>
            } />
            <Route path="/cart" element={<BigCart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
