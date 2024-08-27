import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Store from './Pages/Store';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/contact-us' element={<ContactUs/>} />
          <Route path='/product' element={<ProductsPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
