import { useCounterStore } from "../store/useCounterStore";

const Counter = () => {
  const { increment, decrement } = useCounterStore();
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
