import React from "react";
import { useSelector } from "react-redux";
import { selectCart, selectMoney } from "../redux/reducers/moneySlice";

function Cart() {
  const cart = useSelector(selectCart);
  const money = useSelector(selectMoney);
  return (
    <div className="w-25 mb-5">
      <h3 className="mt-5">Your Receipt</h3>
      <table class="table table-borderless">
        {cart.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td scope="row">{item.name}</td>
              <td>x{item.number + 1}</td>
              <td className="text-success fw-bolder">
                ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
          </tbody>
        ))}

        <tbody>
          <tr>
            <th scope="row">TOTAL</th>
            <td></td>
            <th className="ms-auto text-success fw-bold">
              $
              {(100000000000 - money)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
