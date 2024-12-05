import Accordion from "../components/Accordion";
import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "1rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Accordion</h1>
      </div>
      <div style={{ marginTop: "2rem", width: "50%", alignItems: "center" }}>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
