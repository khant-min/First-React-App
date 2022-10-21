import Controls from "./Controls";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const MainRight = () => {
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

  return (
    <div className="MainRight">
      <h4>SNEAKER COMPANY</h4>
      <h1>Fall Limited Edition</h1>
      <h1>Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <span className="shaw">
        <i className="fa-solid fa-dollar-sign">125.00</i>
        <span>50%</span>
      </span>
      <span className="toe">
        <i className="fa-solid fa-dollar-sign">250.00</i>
      </span>
      <Controls
      // count={count}
      // setCount={setCount}
      // decrement={decrement}
      // increment={increment}
      // setIsClicked={setIsClicked}
      // total={total}
      // setTotal={setTotal}
      // setDeleteCart={setDeleteCart}
      />
    </div>
  );
};

export default MainRight;
