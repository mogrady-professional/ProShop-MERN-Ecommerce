// Functional Components -> Arrow Function
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
