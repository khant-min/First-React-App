import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [total, setTotal] = useState(0);
  const [deleteCart, setDeleteCart] = useState(false);

  const decrement = () => setCount(previousCount => previousCount - 1);
  const increment = () => setCount(previousCount => previousCount + 1);
  count < 0 && setCount(0);
  return (
    <DataContext.Provider
      value={{
        isClicked,
        total,
        setTotal,
        deleteCart,
        setDeleteCart,
        count,
        setCount,
        decrement,
        increment,
        setIsClicked,
        setDeleteCart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
