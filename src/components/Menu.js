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
    <div className="row w-100 d-flex justify-content-center">
      {data.map((item) => (
        <MenuItem
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
      <Cart />
    </div>
  );
}

export default Menu;
