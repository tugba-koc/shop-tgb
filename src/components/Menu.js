import React from "react";
import MenuItem from "./MenuItem";
import Cart from "./Cart";

function Menu() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("Utils/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="row w-100 d-flex justify-content-center ">
      <div className="d-block d-flex justify-content-center">
        <Cart />
      </div>

      {data.map((item) => (
        <MenuItem
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Menu;
