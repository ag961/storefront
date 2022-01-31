import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';

function App() {

  return (
    <>
      <Header />
      <main>
        <Categories />
        <Products />
      </main>

      <Footer />
    </>
  );
}

export default App;
