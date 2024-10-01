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
import NoProducts from './components/NoProducts';
import EditPassword from './components/Profile/EditPassword';
import ForgotPassword from './components/Profile/ForgotPassword';
import ResetPassword from './components/Profile/ResetPassword';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App relative z-10 bg-white">
      <Router>
        <Navbar/>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about-us' element={<AboutUsPage/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/product/:itemID' element={<ProductsPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/account' element={<MyAccount/>} />
          <Route path='/my-orders' element={<Orders/>} />
          <Route path='/edit-profile' element={<EditProfile/>} />
          <Route path='/order-details/:orderID' element={<OrderDetails/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/edit-password' element={<EditPassword/>} />
          <Route path='/no-products' element={<NoProducts/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path="/reset-password/:tokenID" element={<ResetPassword />} />
        </Routes>
        <Footer/>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
