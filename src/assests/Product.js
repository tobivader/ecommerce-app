import React from 'react';
import data from './data.json';
import './Product.css';

import ProductCard from '../Components/ProductCard/ProductCard';

const Products= () => {
  return (
    <div className='product-container'>
      {data.map((product, index) => (
        <ProductCard 
          key={index}
          url={product.image.desktop}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Products;
