import React from "react";
import "./ProductCard.css";
export default function ProductCard(props) {
  console.log(props);
  return (
    <div className="itemCard">
        <div className="image-container">
          <img className="ProductImage" src={props.url} alt={props.name} />
          <button id="addToCart">Add to cart</button>
        </div>
        <div id="info_card">
          <p>{props.category}</p>
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
      </div>
  );
}
