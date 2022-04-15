import { useSelector } from "react-redux";
import { carts } from "../store";
import CartItem from "./CartItem";

const Carts = () => {
  const cart = useSelector(carts);
  return (
    <table className="w-full text-center border border-solid border-gray-500 ">
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
         <CartItem cartItem={c}/>
        ))}
        <tr className="h-14 odd:bg-gray-200 ">
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0.00$</td>
            <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Carts;