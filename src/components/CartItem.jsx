import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image-wrapper">
        <img src={item.image} alt={item.title} className="cart-item-image" />
      </div>
      <div className="cart-item-details">
        <Link to={`/product/${item.id}`} className="cart-item-title">{item.title}</Link>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button className="qty-btn" onClick={handleDecrease} aria-label="Decrease quantity">
            <Minus size={14} />
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={handleIncrease} aria-label="Increase quantity">
            <Plus size={14} />
          </button>
        </div>
        <div className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button 
          className="remove-btn" 
          onClick={() => removeFromCart(item.id)}
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
