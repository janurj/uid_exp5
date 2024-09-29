import React, { useState } from 'react';
import { products } from '../data/products'; // Importing mock product data
import ProductCard from './ProductCard';     // Component to display individual product
import Filter from './Filter';               // Filter component

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);  // State to hold filtered products
  const [cart, setCart] = useState([]); // State to hold cart items

  const handleFilter = (category) => {
    const filtered = category === "All" ? products : products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to cart
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h1>All Products</h1>
      <Filter onFilter={handleFilter} />   {/* Pass handleFilter function to Filter component */}

      {/* Product List */}
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Section */}
      <h2>Cart</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
