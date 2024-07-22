import React from "react";
import data from "./data.json";
import "./Product.css";

import ProductCard from "../Components/ProductCard/ProductCard";

const Products = ({addToCart}) => {
  return (
    <div className="product-container">
      {data.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
