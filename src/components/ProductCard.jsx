import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWished = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isWished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
        <button 
          className={`wishlist-btn ${isWished ? 'active' : ''}`} 
          onClick={toggleWishlist}
          aria-label="Toggle wishlist"
        >
          <Heart className="icon" fill={isWished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={18} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
