import React, { useState } from "react";
import addToCart from './Actions/AddToCart'
import Dessert from "./Pages/Desserts";
import Cart from "./Components/Cart/Cart";

function Main() {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart((prev) => addToCart(product, prev));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "0px 60px",
        backgroundColor: "#f3e8e4",
      }}
    >
      <Dessert addToCart={handleAddToCart}/>
      <Cart products={cart} />
    </div>
  );
}

export default Main;
