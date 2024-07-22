import React from "react";
import Products from "../assests/Product";

import "./Desserts.css";

export default function Desserts({addToCart}) {
  return (
    <div className="Desserts_items">
      <h1>Desserts</h1>
      <div className="Products">
        <Products addToCart={addToCart} />
      </div>
    </div>
  );
}
