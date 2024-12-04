import "./App.css";
import Counter from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import { CounterProvider } from "./store/useCounterStore";

function App() {
  return (
    <CounterProvider>
      <h1>Context API</h1>
      <CounterDisplay />
      <Counter />
    </CounterProvider>
  );
}

export default App;
