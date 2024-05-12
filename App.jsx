import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollNavbar from './components/Navbar/ScrollNavbar';
import Footer from './components/Footer/Footer';
import HomePage from './Route/HomePage';
import ProductsPageRoute from './Route/ProductsPageRoute';
const App = () => {
  return (
    <div>
    <Router>
      <div>
        <ScrollNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Landing page */}
          <Route path="/products" element={<ProductsPageRoute />} /> {/* Products page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  );
};

export default App;