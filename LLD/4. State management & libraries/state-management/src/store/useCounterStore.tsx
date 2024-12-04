/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react";

const INITIAL_STATE = {
  counter: 0,
  increment: () => {},
  decrement: () => {},
};

const CounterContext = createContext(INITIAL_STATE);

export const CounterProvider = ({ children }: any) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterStore = () => useContext(CounterContext);
