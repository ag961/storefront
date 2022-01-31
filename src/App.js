import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Categories from '../src/components/Categories';
import Products from '../src/components/Products';

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
