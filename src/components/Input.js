import React from "react";
import { buyItem, addToCart } from "../redux/reducers/moneySlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/reducers/moneySlice";

function Input({ count, setCount, countList, setCountList, price, id, name }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  let countDiff = 0;

  const changeHandler = (e) => {
    setCount(e.target.value);
  };

  React.useEffect(() => {
    setCountList([count, ...countList]);
    if (count > 0) {
      dispatch(addToCart({ name, id, number: countList[0] }));
      
    }
  }, [count]);

  React.useEffect(() => {
    countDiff = countList.length >= 2 ? countList[0] - countList[1] : 0;
    dispatch(buyItem(price * countDiff));
  }, [countList]);

  console.log(countList);

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
