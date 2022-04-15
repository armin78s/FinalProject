import { Fragment } from "react";
import { useSelector } from "react-redux";
import { carts, totalPrice } from "../store";
import CartItem from "./CartItem";

const Carts = () => {
  const cart = useSelector(carts);
  const total = useSelector(totalPrice);
  let index = 1;
  return (
    <Fragment>
      {cart.length === 0 && (
        <h1 className="mt-12 text-center text-4xl text-indigo-800 font-extrabold">
          Your Cart is empty!
        </h1>
      )}
      {cart.length !== 0 && (
        <table className="mt-12 w-full text-center border border-solid border-gray-500 ">
          <thead>
            <tr className="border border-solid border-gray-500 h-14 bg-gray-400 text-white">
              <th>Number</th>
              <th>Title</th>
              <th>description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c) => (
              <CartItem key={c.id} cartItem={c} num={index++} />
            ))}
            <tr className="h-14 odd:bg-gray-200 ">
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{total} $</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </Fragment>
  );
};

export default Carts;
