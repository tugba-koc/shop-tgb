import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/moneySlice";

function Cart() {
  const cart = useSelector(selectCart);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.number+1}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
