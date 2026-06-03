import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const cartTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemCount = state.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart: state.items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
