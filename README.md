# LuxeStore - Advanced E-Commerce Product Store

LuxeStore is a responsive, modern, and portfolio-ready shopping experience built with React, React Router, and a custom CSS design system. It leverages the public [FakeStore API](https://fakestoreapi.com) for real-time product fetching, categorization, and details, complete with client-side state persistence for the shopping cart and wishlist.

## ✨ Features & Freelance Readiness Checklist

This application actively demonstrates and covers all parts of the **Freelance Readiness** criteria:

### 🚀 React & Core State Management
- **Global State Context & Reducers**: Global cart state managed through a custom context (`CartContext`) combined with a robust `useReducer` to handle actions (`ADD_TO_CART`, `REMOVE_FROM_CART`, `UPDATE_QUANTITY`, `CLEAR_CART`).
- **Custom Hooks**: 
  - `useCart` to access cart data, methods, and calculated values.
  - `useWishlist` for saved items management with automatic addition/removal.
  - `useFetch` to handle API calling, caching (via state), loading, and error states gracefully.
- **Client Persistence**: `localStorage` integration to automatically persist cart and wishlist items across page reloads.
- **Dynamic Routing**: Multi-page routing configuration via `react-router-dom` supporting:
  - `/` (Home, grid listing, categories, and price sorting)
  - `/product/:id` (Individual detailed views with rating & reviews count)
  - `/cart` (Total calculation, quantity increments/decrements, item removal)
  - `/wishlist` (User-favorited listings)
  - `/checkout` (Mock checkout form with real-time field validation and feedback)

### 🎨 Modern UI Design (CSS / UX)
- **Fluid Grid Layouts**: Responsive product layout adapting from mobile screens to ultrawide desktop monitors.
- **Visual Design**: Sleek glassmorphism effects, harmonized Indigo-to-Violet color gradients, and dynamic micro-animations (scale transitions, cart badges, interactive heart states).
- **Dark Mode Support**: Fluid styling variables adapting to systemic light and dark OS preferences.
- **Iconography**: Integrated with `lucide-react` for high-quality, scalable SVG interface icons.

### 🛠️ Developer Skills
- **Clean Folder Structure**: Categorized organization matching production standards (`/src/components`, `/src/context`, `/src/hooks`, `/src/pages`, `/src/services`).
- **Asynchronous Code**: Implementation of `async/await` patterns with modern `fetch` APIs.
- **Validation & Semantics**: Accessible HTML5 elements and structured forms for checkout.

---

## 📂 Project Structure

```
├── public/                 # Static Assets
├── src/
│   ├── assets/             # Images & Logos
│   ├── components/         # Reusable UI Components (Navbar, Loader, FilterSortBar, ProductCard)
│   ├── context/            # Context Providers (CartContext, WishlistContext)
│   ├── hooks/              # Custom Hooks (useCart, useWishlist, useFetch)
│   ├── pages/              # Router Pages (Home, ProductDetail, Cart, Wishlist, Checkout)
│   ├── services/           # Services (API client for FakeStore API)
│   ├── App.jsx             # Main Application Entry & Routing
│   ├── index.css           # Custom CSS Design Tokens & Global Style Reset
│   └── main.jsx            # DOM Mounting Node
├── package.json            # Scripts & Dependency Tree
└── vite.config.js          # Vite Bundler Settings
```

---

## ⚡ Getting Started

### Prerequisites
Make sure you have Node.js installed on your computer.

### Installation

1. Clone or download the repository workspace.
2. Install the necessary project dependencies:
   ```bash
   npm install
   ```

### Execution

To run the application locally in development mode:
```bash
npm run dev
```

To build the production-ready bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
