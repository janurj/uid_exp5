import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);           // Set the selected category
    onFilter(e.target.value);              // Trigger filter function in Home component
  };

  return (
    <div className="filter-container">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
        {/* Add more categories as needed */}
      </select>
    </div>
  );
};

export default Filter;
