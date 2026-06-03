import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

const FilterSortBar = ({ categories, selectedCategory, onSelectCategory, sortOrder, onSortChange }) => {
  return (
    <div className="filter-sort-bar">
      <div className="filter-group">
        <Filter size={18} className="icon" />
        <select 
          value={selectedCategory} 
          onChange={(e) => onSelectCategory(e.target.value)}
          className="select-input"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="sort-group">
        <ArrowUpDown size={18} className="icon" />
        <select 
          value={sortOrder} 
          onChange={(e) => onSortChange(e.target.value)}
          className="select-input"
        >
          <option value="default">Default Sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortBar;
