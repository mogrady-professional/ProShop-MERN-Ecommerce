// Functional Components -> Arrow Function
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './pages/Home';
import ProductScreen from './pages/Product';
import CartScreen from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
