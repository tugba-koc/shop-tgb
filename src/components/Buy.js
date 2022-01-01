import React from "react";
import { useSelector } from "react-redux";
import { selectMoney } from "../redux/reducers/moneySlice";

function Buy({ price, count, setCount }) {
  const money = useSelector(selectMoney);

  const buyHandle = () => {
    if (count >= 0 && price <= money) {
      setCount(Number(count) + 1);
    }
  };

  return (
    <>
      <button
        onClick={buyHandle}
        type="button"
        className={`btn px-4 shadow-none ${
          price <= money ? "btn-success" : "btn-light"
        } `}
      >
        Buy
      </button>
    </>
  );
}

export default Buy;
