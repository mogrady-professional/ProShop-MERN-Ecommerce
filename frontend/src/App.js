// Functional Components -> Arrow Function
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './pages/Home';
import ProductScreen from './pages/Product';
import CartScreen from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/placeOrder';
import Order from './pages/Order';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';
import ProductList from './pages/ProductList';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import OrderList from './pages/OrderList';
import OrderViewAdmin from './pages/OrderViewAdmin';
import PageNotFound from './pages/PageNotFound';

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
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeOrder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/admin/userList" element={<UserList />} />
            <Route path="/admin/user/:id/edit" element={<EditUser />} />
            <Route path="/admin/productList" element={<ProductList />} />
            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id/edit" element={<EditProduct />} />
            <Route path="/admin/orderList" element={<OrderList />} />
            <Route path="/admin/order/:orderId" element={<OrderViewAdmin />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
