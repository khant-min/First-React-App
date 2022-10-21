import { useContext } from "react";
import DataContext from "./context/DataContext";

const Controls = () => {
  const {
    count,
    setCount,
    decrement,
    increment,
    setIsClicked,
    total,
    setTotal,
    setDeleteCart,
  } = useContext(DataContext);

  const shoppingCart = () => {
    setCount(0);
    setIsClicked(true);
    setTotal(total + count);
    setDeleteCart(false);
  };

  return (
    <div className="Controls">
      <div className="number-box">
        <button className="decrement" onClick={decrement}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{count}</span>
        <button className="increment" onClick={increment}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <button className="shop" onClick={shoppingCart}>
        <i className="fa-sharp fa-solid fa-cart-shopping"></i>Add to cart
      </button>
    </div>
  );
};

export default Controls;
