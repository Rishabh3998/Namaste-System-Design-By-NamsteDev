import "./App.css";
import Comments from "./components/Comments";
import { DATA } from "./data/data";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Nested comments</h1>
      <Comments data={DATA} />
    </div>
  );
}

export default App;
