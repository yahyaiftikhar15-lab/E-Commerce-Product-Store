import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </main>
            <footer className="footer">
              <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} LuxeStore. All rights reserved.</p>
                <div className="footer-links">
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms of Service</Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
            </footer>
          </div>
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
