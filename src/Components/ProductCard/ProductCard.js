import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import "./ProductCard.css";
import "primeicons/primeicons.css";

export default function ProductCard(props) {
  console.log(props);
  return (
    <div className="itemCard">
      <div className="image-container">
        <img className="ProductImage" src={props.url} alt={props.name} />
        <button id="addToCart">
          <MdAddShoppingCart /> Add to cart
        </button>
      </div>
      <div id="info_card">
        <p><small>{props.category}</small></p>
        <p>{props.name}</p>
        <p id="price">{props.price}</p>
      </div>
    </div>
  );
}
