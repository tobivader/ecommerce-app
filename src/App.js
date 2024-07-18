import Desert from "./Pages/Desserts";
import Cart from "./Components/Cart/Cart"
import "./App.css";

function App() {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        padding: '0px 60px'
      }}
    >
      <Desert />
      <Cart />
    </div>
  );
}

export default App;
