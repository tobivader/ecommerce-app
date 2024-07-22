import React from "react";
import emptyCartImage from '../../assests/images/emptycart.png'
import "./Cart.css";

export default function Cart({ products }) {
  return (
    <div className="Cart-container">
      <div className="Cart">
        {products.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart (0)</h2>
            <img src={emptyCartImage} alt="Empty cart" id="cartImage" />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div className="CartFilled">
            <h2>Your Cart ({products.length})</h2>
            <ul>
              {products.map((product, index) => (
                <li key={index}>
                  {product.name} - ${product.price.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
