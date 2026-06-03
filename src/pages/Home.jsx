import React, { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchProducts, fetchCategories } from '../services/api';
import ProductCard from '../components/ProductCard';
import FilterSortBar from '../components/FilterSortBar';
import Loader from '../components/Loader';

const Home = () => {
  const { data: products, loading: productsLoading, error: productsError } = useFetch(fetchProducts, []);
  const { data: categoriesData, loading: categoriesLoading } = useFetch(fetchCategories, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  const categories = categoriesData || [];

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];
    
    let result = [...products];

    // Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    if (sortOrder === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder]);

  if (productsError) {
    return (
      <div className="container page-content">
        <div className="error-message">Error loading products: {productsError}</div>
      </div>
    );
  }

  return (
    <div className="container page-content">
      <div className="page-header">
        <h1 className="page-title">Discover Our Products</h1>
        <p className="page-subtitle">Premium quality items for your everyday needs.</p>
      </div>
      
      {!categoriesLoading && (
        <FilterSortBar 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
      )}

      {productsLoading ? (
        <Loader />
      ) : (
        <div className="product-grid">
          {filteredAndSortedProducts.length > 0 ? (
            filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-results">No products found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
