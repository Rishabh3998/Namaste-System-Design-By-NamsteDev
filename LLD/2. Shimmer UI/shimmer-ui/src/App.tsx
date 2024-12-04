import "./App.css";
import Shimmer from "./components/Shimmer";

function App() {
  return (
    <div style={{ width: "500px" }}>
      <h1>Shimmer UI</h1>
      <Shimmer height="8rem" color="#646cffaa" />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Shimmer height="2rem" width="2rem" color="#646cffaa" type="circle" />
        <Shimmer height="2rem" color="#646cffaa" width="50%" />
      </div>
      <Shimmer height="2rem" color="#646cffaa" width="30%" />
      <Shimmer height="2rem" color="#646cffaa" width="30%" />
    </div>
  );
}

export default App;
