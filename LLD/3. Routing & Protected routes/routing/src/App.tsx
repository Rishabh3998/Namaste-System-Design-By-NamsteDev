import "./App.css";
import Header from "./components/Header";

function App() {
  // If you want to implement protected routing the best solution would be to make a wrapper and wrap
  // all the routes within that wrapper.
  return (
    <div>
      <Header />
      <h1>Routing and Protected routes</h1>
    </div>
  );
}

export default App;
