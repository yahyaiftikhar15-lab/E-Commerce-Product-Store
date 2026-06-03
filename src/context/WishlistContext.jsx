import React, { createContext, useReducer, useEffect } from 'react';

export const WishlistContext = createContext();

const initialState = {
  items: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (state.items.find(item => item.id === action.payload.id)) {
        return state;
      }
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (product) => dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  const removeFromWishlist = (id) => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  const isInWishlist = (id) => state.items.some(item => item.id === id);

  return (
    <WishlistContext.Provider value={{
      wishlist: state.items,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
