import { useCounterStore } from "../store/useCounterStore";

const CounterDisplay = () => {
  const { counter } = useCounterStore();

  return (
    <div>
      <h1>{`Counter value: ${counter}`}</h1>
    </div>
  );
};

export default CounterDisplay;
