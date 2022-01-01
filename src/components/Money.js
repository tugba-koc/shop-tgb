import React from "react";
import { selectMoney } from "../redux/reducers/moneySlice";
import { useSelector } from "react-redux";

function Money() {
  const money = useSelector(selectMoney);

  return (
    <div className="bg-success text-light fw-bold fs-3 py-5">
      ${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </div>
  );
}

export default Money;
