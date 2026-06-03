import React from 'react';
import { useWishlist } from '../hooks/useWishlist';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="container page-content empty-state">
        <div className="empty-icon-wrapper wishlist-empty">
          <Heart size={48} className="empty-icon" />
        </div>
        <h1 className="page-title">Your Wishlist is Empty</h1>
        <p className="page-subtitle">Save items you like here to check them out later.</p>
        <Link to="/" className="btn btn-primary">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">My Wishlist</h1>
        <p className="page-subtitle">Your favorite premium products saved in one place.</p>
      </div>

      <div className="product-grid">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
