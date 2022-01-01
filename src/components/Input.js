import React from "react";
import { buyItem, addToCart } from "../redux/reducers/moneySlice";
import { useDispatch } from "react-redux";

function Input({ count, setCount, countList, setCountList, price, id, name }) {
  const dispatch = useDispatch();

  let countDiff = 0;

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  React.useEffect(() => {
    setCountList([count, ...countList]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  countDiff = countList.length >= 2 ? countList[0] - countList[1] : 0;

  React.useEffect(() => {
    dispatch(buyItem(price * countDiff));
    if (count > 0) {
      dispatch(addToCart({ name, id, price, number: countList[0] }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countList]);

  return (
    <>
      <input
        className="input text-center"
        type="number"
        name="count"
        value={count}
        onChange={changeHandler}
      />
    </>
  );
}

export default Input;
