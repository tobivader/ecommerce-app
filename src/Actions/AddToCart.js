const addToCart = (product,cartProducts) => {
    return [...cartProducts,product];
  };
  export default addToCart
 // add to cart function needs to be moved to a parent component to pass the props to the cart 
 // export this function to 