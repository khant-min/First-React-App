import jack from "./images/image-avatar.png";
import card from "./images/icon-cart.svg";
import ListItems from "./ListItems";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Right = () => {
  const { isClicked, setTotal, total, deleteCart, setDeleteCart } =
    useContext(DataContext);
  const [checked, setChecked] = useState(false);

  return (
    <div className="Right">
      <div className="shopping-count" onClick={() => setChecked(!checked)}>
        {isClicked && <span>{total}</span>}
        <img className="card" src={card} />
      </div>
      <img className="jack" src={jack} />
      {checked && (
        <div className="shopping-info">
          <h4>Cart</h4>
          {total === 0 || deleteCart ? (
            <p>Your Cart is empty!</p>
          ) : (
            <>
              <ul
                className="detail_container"
                style={deleteCart ? { display: "none" } : { display: "block" }}
              >
                <ListItems
                  total={total}
                  setTotal={setTotal}
                  setDeleteCart={setDeleteCart}
                />
              </ul>
              <button className="checkout">Checkout</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Right;
