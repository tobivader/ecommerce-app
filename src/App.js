import Desert from "./Pages/Desserts";
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
      <div>Cart</div>
    </div>
  );
}

export default App;
