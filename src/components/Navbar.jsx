import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

const Navbar = () => {
  const { cartItemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <Link to="/" className="nav-logo">
          <span>LuxeStore</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" className="nav-link" end>
            Home
          </NavLink>
          <NavLink to="/wishlist" className="nav-link icon-link">
            <Heart className="nav-icon" />
            {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
          </NavLink>
          <NavLink to="/cart" className="nav-link icon-link">
            <ShoppingCart className="nav-icon" />
            {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
