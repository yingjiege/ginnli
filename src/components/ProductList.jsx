import React from 'react';
import ProductCard from './ProductCard'; // Example product card component

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;