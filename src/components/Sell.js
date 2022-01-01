import React from "react";
import { sellItem } from "../redux/reducers/moneySlice";

function Sell({ count, setCount }) {
  const sellHandle = () => {
    if (count > 0) {
      setCount(Number(count) - 1);
    }
  };

  return (
    <>
      <button
        onClick={sellHandle}
        type="button"
        className={`btn px-4 shadow-none ${
          count ? "btn-danger" : "btn-light"
        } `}
      >
        Sell
      </button>
    </>
  );
}

export default Sell;
