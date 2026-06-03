import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from '../components/CartItem';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';

const Cart = () => {
  const { cart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container page-content empty-state">
        <div className="empty-icon-wrapper">
          <ShoppingBag size={48} className="empty-icon" />
        </div>
        <h1 className="page-title">Your Cart is Empty</h1>
        <p className="page-subtitle">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Shopping Cart</h1>
        <p className="page-subtitle">Manage the items in your cart and proceed to checkout.</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items-section">
          <div className="cart-items-header">
            <span>Product details</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          
          <div className="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-actions-row">
            <button className="btn btn-outline-danger" onClick={clearCart}>
              <Trash2 size={16} />
              Clear Cart
            </button>
            <Link to="/" className="back-link">
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="cart-summary-section">
          <div className="summary-card">
            <h2 className="summary-title">Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            <div className="summary-row">
              <span>Estimated Tax</span>
              <span>$0.00</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-block checkout-btn">
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
