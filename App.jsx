import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollNavbar from './components/Navbar/ScrollNavbar';
import Footer from './components/Footer/Footer';
import HomePage from './Route/HomePage';
import ProductsPageRoute from './Route/ProductsPageRoute';
import ProductPage from './Route/ProductPage';
import CustomizationPage from './Route/CustomizationPage';
import WishListPage from './Route/WishListPage';
import RecomPageRoute from './Route/RecomPageRoute';
const App = () => {
  return (
    <div>
    <Router>
      <div>
        <ScrollNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Landing page */}
          <Route path="/products" element={<ProductsPageRoute />} /> {/* Products page */}
          <Route path="/Product" element={<ProductPage/>}/> {/*Product Page*/}
          <Route path="/customize" element={<CustomizationPage/>}/> {/*customize Page*/}
          <Route path="/wishlist" element={<WishListPage/>}/> {/*customize Page*/}
          <Route path="/recommendation" element={<RecomPageRoute/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  );
};

export default App;