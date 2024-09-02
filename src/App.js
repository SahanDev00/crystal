import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Store from './Pages/Store';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUs from './Pages/ContactUs';
import ProductsPage from './Pages/ProductsPage';
import Login from './components/Profile/Login';
import MyAccount from './components/Profile/MyAccount';
import Orders from './components/Profile/Orders';
import EditProfile from './components/Profile/EditProfile';
import OrderDetails from './components/Profile/OrderDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';

function App() {
  return (
    <div className="App bg-cyan-50/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about-us' element={<AboutUsPage/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/product' element={<ProductsPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/account' element={<MyAccount/>} />
          <Route path='/my-orders' element={<Orders/>} />
          <Route path='/edit-profile' element={<EditProfile/>} />
          <Route path='/order-details' element={<OrderDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
