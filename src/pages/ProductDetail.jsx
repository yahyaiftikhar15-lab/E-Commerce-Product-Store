import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { fetchProductById } from '../services/api';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import Loader from '../components/Loader';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  
  const fetchSingleProduct = React.useCallback(() => fetchProductById(id), [id]);
  const { data: product, loading, error } = useFetch(fetchSingleProduct, [id]);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (loading) return <Loader />;
  
  if (error || !product) {
    return (
      <div className="container page-content">
        <div className="error-message">Error loading product: {error || 'Product not found'}</div>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Products</Link>
      </div>
    );
  }

  const isWished = isInWishlist(product.id);

  const toggleWishlist = () => {
    if (isWished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="container page-content">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Products</Link>
      
      <div className="product-detail-container">
        <div className="product-detail-image-wrapper">
          <img src={product.image} alt={product.title} className="product-detail-image" />
        </div>
        
        <div className="product-detail-info">
          <div className="product-badge">{product.category}</div>
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-rating">
            <span className="rating-star">★</span>
            <span className="rating-rate">{product.rating?.rate}</span>
            <span className="rating-count">({product.rating?.count} reviews)</span>
          </div>
          
          <div className="product-detail-price">${product.price.toFixed(2)}</div>
          
          <p className="product-detail-description">{product.description}</p>
          
          <div className="product-detail-actions">
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className={`btn btn-outline ${isWished ? 'active' : ''}`} onClick={toggleWishlist}>
              <Heart size={20} fill={isWished ? 'currentColor' : 'none'} />
              {isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
