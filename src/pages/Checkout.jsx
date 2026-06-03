import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="container page-content empty-state">
        <h1 className="page-title">No items to checkout</h1>
        <p className="page-subtitle">Your cart is empty. Add some products first!</p>
        <Link to="/" className="btn btn-primary">Go to Shop</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Invalid card number';
    }
    if (!formData.expiry.trim()) newErrors.expiry = 'Required';
    if (!formData.cvv.trim()) {
      newErrors.cvv = 'Required';
    } else if (formData.cvv.length < 3) {
      newErrors.cvv = 'Invalid';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidationErrors = validateForm();
    if (Object.keys(formValidationErrors).length > 0) {
      setErrors(formValidationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="container page-content empty-state success-state">
        <div className="success-icon-wrapper">
          <CheckCircle size={64} className="success-icon" />
        </div>
        <h1 className="page-title">Order Confirmed!</h1>
        <p className="page-subtitle">
          Thank you for your purchase. We have received your order and are processing it.
          A confirmation email has been sent to <strong>{formData.email}</strong>.
        </p>
        <div className="order-details-box">
          <p>Shipping to: <strong>{formData.fullName}</strong></p>
          <p>Address: {formData.address}, {formData.city}, {formData.zipCode}</p>
        </div>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Checkout</h1>
        <p className="page-subtitle">Enter your shipping and payment details to complete your order.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="form-section-title">Shipping Information</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={errors.fullName ? 'error' : ''}
                placeholder="John Doe"
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="john@example.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'error' : ''}
                placeholder="123 Luxury Ave"
              />
              {errors.address && <span className="error-text">{errors.address}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'error' : ''}
                  placeholder="New York"
                />
                {errors.city && <span className="error-text">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={errors.zipCode ? 'error' : ''}
                  placeholder="10001"
                />
                {errors.zipCode && <span className="error-text">{errors.zipCode}</span>}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="form-section-title">Payment Information</h2>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <div className="input-with-icon">
                <CreditCard size={18} className="input-icon" />
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className={errors.cardNumber ? 'error' : ''}
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </div>
              {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className={errors.expiry ? 'error' : ''}
                  placeholder="MM/YY"
                />
                {errors.expiry && <span className="error-text">{errors.expiry}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className={errors.cvv ? 'error' : ''}
                  placeholder="123"
                />
                {errors.cvv && <span className="error-text">{errors.cvv}</span>}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <ShieldCheck size={20} />
                <span>Place Order (${cartTotal.toFixed(2)})</span>
              </>
            )}
          </button>
        </form>

        <div className="checkout-summary">
          <div className="summary-card">
            <h2 className="summary-title">Order Summary</h2>
            <div className="checkout-items-list">
              {cart.map(item => (
                <div key={item.id} className="checkout-item-row">
                  <div className="checkout-item-details">
                    <span className="checkout-item-name">{item.title}</span>
                    <span className="checkout-item-qty">Qty: {item.quantity}</span>
                  </div>
                  <span className="checkout-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
