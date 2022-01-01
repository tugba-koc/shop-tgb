import React from "react";
import Buy from "./Buy";
import Input from "./Input";
import Sell from "./Sell";

function MenuItem({ id, name, price, img }) {
  const [count, setCount] = React.useState(0);
  const [countList, setCountList] = React.useState([]);

  return (
    <div
      className="col-md-3 mx-md-1 col-sm-6 col-12 mt-3 border p-3 mb-3"
      key={id}
    >
      <img src={img} height="120px" alt="img" />
      <p className="fs-4 fw-bolder mb-0">{name}</p>
      <p className="fs-5 fw-normal text-success mt-0">${price}</p>
      <div className="d-flex flex-row align-items-center justify-content-evenly">
        <Sell count={count} setCount={setCount} />
        <Input
        id={id}
        name={name}
          price={price}
          count={count}
          setCount={setCount}
          countList={countList}
          setCountList={setCountList}
        />
        <Buy price={price} count={count} countList={countList} setCount={setCount} name={name} id={id} />
      </div>
    </div>
  );
}

export default MenuItem;
