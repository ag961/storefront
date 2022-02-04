import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import { Box } from "@mui/material";

function App() {

  return (
    <>
      <Header />
      <Categories />
      <Box className='bodyContainer'>
        <Products />
      </Box>
      <Footer />
    </>
  );
}

export default App;
