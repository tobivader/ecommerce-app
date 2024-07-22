import React,{useState}from "react";
import { MdAddShoppingCart } from "react-icons/md";

import "./ProductCard.css";
import "primeicons/primeicons.css";

export default function ProductCard({ product,addToCart}) {
  
  
  return (
    <div className="itemCard">
      <div className="image-container">
        <img
          className="ProductImage"
          src={product.image.desktop}
          alt={product.name}
        />
        <button id="addToCart"  onClick={() => addToCart(product)}>
          <MdAddShoppingCart /> Add to cart
        </button>
      </div>
      <div id="info_card">
        <p>
          <small>{product.category}</small>
        </p>
        <p>{product.name}</p>
        <p id="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
